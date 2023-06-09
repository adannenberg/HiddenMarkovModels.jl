using BenchmarkTools
using Distributions
using Distributions: PDiagMat
using HiddenMarkovModels: HMMs

function rand_params_hmms(; N, D)
    p = ones(N) / N
    A = ones(N, N) / N
    μ = randn(N, D)
    σ = 2 * ones(N, D)
    return (; p, A, μ, σ)
end

function rand_model_hmms(; N, D)
    (; p, A, μ, σ) = rand_params_hmms(; N, D)
    dists = [DiagNormal(μ[n, :], PDiagMat(σ[n, :] .^ 2)) for n in 1:N]
    model = HMMs.HMM(copy(p), copy(A), dists)
    return model
end

function benchmarkables_hmms(; N, D, T, I)
    obs_seq = [randn(D) for t in 1:T]
    obs_seqs = [obs_seq]
    logdensity = @benchmarkable HMMs.logdensityof(model, $obs_seq) setup = (
        model = rand_model_hmms(; N=$N, D=$D)
    )
    viterbi = @benchmarkable HMMs.viterbi(model, $obs_seq) setup = (
        model = rand_model_hmms(; N=$N, D=$D)
    )
    forward_backward = @benchmarkable HMMs.forward_backward(model, $obs_seq) setup = (
        model = rand_model_hmms(; N=$N, D=$D)
    )
    baum_welch = @benchmarkable HMMs.baum_welch(
        model, $obs_seqs; max_iterations=$I, rtol=-Inf
    ) setup = (model = rand_model_hmms(; N=$N, D=$D))
    return (; logdensity, viterbi, forward_backward, baum_welch)
end