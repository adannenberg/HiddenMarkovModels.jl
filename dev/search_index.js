var documenterSearchIndex = {"docs":
[{"location":"benchmarks/#Benchmarks","page":"Benchmarks","title":"Benchmarks","text":"","category":"section"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"These benchmarks were generated with the following setup:","category":"page"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"using InteractiveUtils\nversioninfo()","category":"page"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"The test case is an HMM with multi-dimensional Gaussian observations, initialized randomly. We compare the following packages:","category":"page"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"HiddenMarkovModels.jl (abbreviated to HMMs.jl)\nHMMBase.jl\nhmmlearn\npomegranate","category":"page"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"For now, pomegranate is not included on the plots because it is much slower on very small inputs.","category":"page"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"(Image: Logdensity benchmark)","category":"page"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"(Image: Viterbi benchmark)","category":"page"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"(Image: Forward-backward benchmark)","category":"page"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"(Image: Baum-Welch benchmark)","category":"page"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"The full benchmark logs are available in JSON format: results from Julia and results from Python. Take a look at the code in benchmark/utils to see how they were generated.","category":"page"},{"location":"api/#API-reference","page":"API reference","title":"API reference","text":"","category":"section"},{"location":"api/","page":"API reference","title":"API reference","text":"","category":"page"},{"location":"api/","page":"API reference","title":"API reference","text":"Modules = [HiddenMarkovModels]","category":"page"},{"location":"api/#HiddenMarkovModels.HiddenMarkovModels","page":"API reference","title":"HiddenMarkovModels.HiddenMarkovModels","text":"HiddenMarkovModels\n\nA Julia package for HMM modeling, simulation, inference and learning.\n\n\n\n\n\n","category":"module"},{"location":"api/#HiddenMarkovModels.HMM","page":"API reference","title":"HiddenMarkovModels.HMM","text":"HMM\n\nAlias for the struct HiddenMarkovModel.\n\n\n\n\n\n","category":"type"},{"location":"api/#HiddenMarkovModels.HiddenMarkovModel","page":"API reference","title":"HiddenMarkovModels.HiddenMarkovModel","text":"HiddenMarkovModel{SP<:StateProcess,OP<:ObservationProcess}\n\nCombination of a state and an observation process, amenable to simulation, inference and learning.\n\nFields\n\nstate_process::SP\nobs_process::OP\n\n\n\n\n\n","category":"type"},{"location":"api/#HiddenMarkovModels.HiddenMarkovModel-Tuple{AbstractVector, AbstractMatrix, AbstractVector}","page":"API reference","title":"HiddenMarkovModels.HiddenMarkovModel","text":"HMM(p, A, dists)\n\nConstruct an HMM from a vector of initial probabilities, a matrix of transition probabilities and a vector of observation distributions.\n\nSame constructor as in HMMBase.jl.\n\n\n\n\n\n","category":"method"},{"location":"api/#HiddenMarkovModels.ObservationProcess","page":"API reference","title":"HiddenMarkovModels.ObservationProcess","text":"ObservationProcess\n\nAbstract type for the observation part of an HMM.\n\nRequired methods\n\nBase.length(op)\ndistribution(op, i)\n\nOptional methods\n\nreestimate!(op, obs_seq, γ)\n\n\n\n\n\n","category":"type"},{"location":"api/#HiddenMarkovModels.StandardObservationProcess","page":"API reference","title":"HiddenMarkovModels.StandardObservationProcess","text":"StandardObservationProcess{D} <: ObservationProcess\n\nFields\n\ndistributions::AbstractVector{D}: one distribution per state\n\n\n\n\n\n","category":"type"},{"location":"api/#HiddenMarkovModels.StandardStateProcess","page":"API reference","title":"HiddenMarkovModels.StandardStateProcess","text":"StandardStateProcess <: StateProcess\n\nFields\n\np::AbstractVector: initial distribution\nA::AbstractMatrix: transition matrix\n\n\n\n\n\n","category":"type"},{"location":"api/#HiddenMarkovModels.StateProcess","page":"API reference","title":"HiddenMarkovModels.StateProcess","text":"StateProcess\n\nAbstract type for the state part of an HMM.\n\nRequired methods\n\nBase.length(sp)\ninitial_distribution(sp)\ntransition_matrix(sp)\n\nOptional methods\n\nreestimate!(sp, p_count, A_count)\n\n\n\n\n\n","category":"type"},{"location":"api/#Base.rand-Tuple{HiddenMarkovModel, Integer}","page":"API reference","title":"Base.rand","text":"rand(hmm, T)\n\nSimulate an HMM for T time steps.\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.rand-Tuple{Random.AbstractRNG, HiddenMarkovModel, Integer}","page":"API reference","title":"Base.rand","text":"rand(rng, hmm, T)\n\nSimulate an HMM for T time steps with a specified rng.\n\n\n\n\n\n","category":"method"},{"location":"api/#DensityInterface.logdensityof-Tuple{HiddenMarkovModel, Any}","page":"API reference","title":"DensityInterface.logdensityof","text":"DensityInterface.logdensityof(hmm, obs_seq)\n\nApply the forward algorithm to compute the loglikelihood of a sequence of observations.\n\n\n\n\n\n","category":"method"},{"location":"api/#HiddenMarkovModels.baum_welch-Tuple{HiddenMarkovModel, Any}","page":"API reference","title":"HiddenMarkovModels.baum_welch","text":"baum_welch(hmm_init, obs_seqs; max_iterations, rtol)\n\nApply the Baum-Welch algorithm to estimate the parameters of an HMM on multiple observation sequences, and return a tuple (hmm, logL_evolution).\n\n\n\n\n\n","category":"method"},{"location":"api/#HiddenMarkovModels.fit_from_sequence-Union{Tuple{D}, Tuple{Type{D}, AbstractVector, AbstractVector}} where D","page":"API reference","title":"HiddenMarkovModels.fit_from_sequence","text":"fit_from_sequence(::Type{D}, x, w)\n\nFit a distribution of type D based on a single sequence of observations x associated with a single sequence of weights w.\n\nDefault to StatsAPI.fit, with a special case for Distributions.jl and vectors of vectors (because this implementation of fit accepts matrices instead). Users are free to override this default for concrete distributions.\n\n\n\n\n\n","category":"method"},{"location":"api/#HiddenMarkovModels.forward_backward-Tuple{HiddenMarkovModel, Any}","page":"API reference","title":"HiddenMarkovModels.forward_backward","text":"forward_backward(hmm, obs_seq)\n\nApply the forward-backward algorithm to estimate the posterior state marginals of an HMM.\n\n\n\n\n\n","category":"method"},{"location":"api/#HiddenMarkovModels.viterbi-Tuple{HiddenMarkovModel, Any}","page":"API reference","title":"HiddenMarkovModels.viterbi","text":"viterbi(hmm, obs_seq)\n\nApply the Viterbi algorithm to compute the most likely sequence of states of an HMM.\n\n\n\n\n\n","category":"method"},{"location":"notations/#Notations","page":"Notations","title":"Notations","text":"","category":"section"},{"location":"notations/","page":"Notations","title":"Notations","text":"Our whole package is based on the following paper by Rabiner (1989):","category":"page"},{"location":"notations/","page":"Notations","title":"Notations","text":"A tutorial on hidden Markov models and selected applications in speech recognition","category":"page"},{"location":"notations/","page":"Notations","title":"Notations","text":"Please refer to it for mathematical explanations.","category":"page"},{"location":"notations/#State-process","page":"Notations","title":"State process","text":"","category":"section"},{"location":"notations/","page":"Notations","title":"Notations","text":"sp or state_process: a StateProcess\np: initial_distribution (vector of state probabilities)\nA: transition_matrix (matrix of transition probabilities)\nstate_seq: a sequence of states (vector of integers)","category":"page"},{"location":"notations/#Observation-process","page":"Notations","title":"Observation process","text":"","category":"section"},{"location":"notations/","page":"Notations","title":"Notations","text":"op or obs_process: an ObservationProcess\n(log)b: vector of observation (log)likelihoods by state for a single observation\n(log)B: matrix of observation (log)likelihoods by state for a sequence of observations\nobs_seq: a sequence of observations\nobs_seqs: several sequences of observations","category":"page"},{"location":"notations/#Forward-backward","page":"Notations","title":"Forward backward","text":"","category":"section"},{"location":"notations/","page":"Notations","title":"Notations","text":"α: forward variables\nc: forward variable inverse normalizations\nβ: backward variables\nγ: one-state marginals\nξ: two-state marginals\nlogL: loglikelihood of a sequence of observations","category":"page"},{"location":"#HiddenMarkovModels.jl","page":"Home","title":"HiddenMarkovModels.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A Julia package for HMM modeling, simulation, inference and learning.[1]","category":"page"},{"location":"","page":"Home","title":"Home","text":"[1]: Logo by Clément Mantoux","category":"page"},{"location":"#Main-features","page":"Home","title":"Main features","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"info: Performance\nallocation-free versions of core functions\nlinear algebra subroutines\nmultithreading\ncompatibility with StaticArrays.jl","category":"page"},{"location":"","page":"Home","title":"Home","text":"info: Genericity\ntransition matrices can be dense or sparse\nemission distributions d must only implement x = rand(d) and logdensityof(d, x) (as per DensityInterface.jl)\npossibility to add priors\nnumber types are not restricted","category":"page"},{"location":"","page":"Home","title":"Home","text":"info: Automatic differentiation\nin forward mode with ForwardDiff.jl\nin reverse mode with ChainRules.jl (WIP)","category":"page"},{"location":"tutorial/#Tutorial","page":"Tutorial","title":"Tutorial","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"warning: Work in progress\nIn the meantime, you can take a look at the files in test (especially test/correctness.jl) which demonstrate various ways in which the package can be used.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"using HiddenMarkovModels, Distributions\n\nfunction random_gaussian_hmm(N)\n    p, A = ones(N) / N, rand_trans_mat(N)\n    μ, σ = randn(N), ones(N)\n    dists = [Normal(μ[n], σ[n]) for n in 1:N]\n    return HMM(p, A, dists)\nend;\n\nhmm = random_gaussian_hmm(2)  # initialization\n\nstate_seq, obs_seq = rand(hmm, 1000);  # simulation\n\nlogdensityof(hmm, obs_seq)  # loglikelihood\n\nmost_likely_state_seq = viterbi(hmm, obs_seq);  # inference\n\nhmm_est, logL_evolution = baum_welch(random_gaussian_hmm(2), [obs_seq]);  # estimation\nhmm_est\nfirst(logL_evolution), last(logL_evolution)","category":"page"}]
}
