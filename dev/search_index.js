var documenterSearchIndex = {"docs":
[{"location":"benchmarks/#Benchmarks","page":"Benchmarks","title":"Benchmarks","text":"","category":"section"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"The test case is an HMM with diagonal multivariate normal observations. We compare the following packages:","category":"page"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"HiddenMarkovModels.jl (abbreviated to HMMs.jl)\nHMMBase.jl\nhmmlearn\npomegranate","category":"page"},{"location":"benchmarks/#Results","page":"Benchmarks","title":"Results","text":"","category":"section"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"danger: Why is this empty?\nThe benchmark suite is computationally expensive, and we only run it once for each new release. If the following section contains no plots and the links are broken, you're probably reading the development documentation or a local build of the website. Check out the stable documentation instead.","category":"page"},{"location":"benchmarks/#Single-sequence","page":"Benchmarks","title":"Single sequence","text":"","category":"section"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"Full benchmark logs: results_single_sequence.csv.","category":"page"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"(Image: Plot - Logdensity single sequence benchmark)","category":"page"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"(Image: Plot - Viterbi single sequence benchmark)","category":"page"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"(Image: Plot - Forward-backward single sequence benchmark)","category":"page"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"(Image: Plot - Baum-Welch single sequence benchmark)","category":"page"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"Here, pomegranate is not included because it is much slower on very small inputs.","category":"page"},{"location":"benchmarks/#Multiple-sequences","page":"Benchmarks","title":"Multiple sequences","text":"","category":"section"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"Full benchmark logs: results_multiple_sequences.csv.","category":"page"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"(Image: Plot - Logdensity single sequence benchmark)","category":"page"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"(Image: Plot - Baum-Welch single sequence benchmark)","category":"page"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"Here, HMMBase.jl is not included because it does not support multiple sequences.","category":"page"},{"location":"benchmarks/#Reproducibility","page":"Benchmarks","title":"Reproducibility","text":"","category":"section"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"These benchmarks were generated in the following environment: setup.txt.","category":"page"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"If you want to run them on your machine:","category":"page"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"Clone the HiddenMarkovModels.jl repository\nOpen a Julia REPL at the root\nRun the following commands\ninclude(\"benchmark/run_benchmarks.jl\")\ninclude(\"benchmark/process_benchmarks.jl\")","category":"page"},{"location":"benchmarks/#Remarks","page":"Benchmarks","title":"Remarks","text":"","category":"section"},{"location":"benchmarks/#Allocations","page":"Benchmarks","title":"Allocations","text":"","category":"section"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"A major bottleneck of performance in Julia is memory allocations. The benchmarks for HMMs.jl thus employ a custom implementation of diagonal multivariate normals, which is entirely allocation-free.","category":"page"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"This partly explains the performance gap with HMMBase.jl as the dimension D grows beyond 1. Such a trick is also possible with HMMBase.jl, but slightly more demanding since it requires subtyping Distribution from Distributions.jl, instead of just implementing DensityInterface.jl. We might do it in future benchmarks.","category":"page"},{"location":"benchmarks/#Parallelism","page":"Benchmarks","title":"Parallelism","text":"","category":"section"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"The packages we include have different approaches to parallelism, which can bias the evaluation in complex ways:","category":"page"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"Package States N Observations D Sequences K\nHMMs.jl LinearAlgebra[2] depends[2] Threads[1]\nHMMBase.jl - depends[2] -\nhmmlearn NumPy[2] NumPy[2] NumPy[2]\npomegranate PyTorch[3] PyTorch[3] PyTorch[3]","category":"page"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"[1]: possibly affected by JULIA_NUM_THREADS","category":"page"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"[2]: possibly affected by OPENBLAS_NUM_THREADS","category":"page"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"[3]: possibly affected by MKL_NUM_THREADS","category":"page"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"For a fairer comparison, we set JULIA_NUM_THREADS=1, even though it robs HMMs.jl of its parallel speedup on multiple sequences.","category":"page"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"In addition, OpenBLAS threads have negative interactions with Julia threads. To overcome this obstacle, we run the Julia benchmarks (and only those) with OPENBLAS_NUM_THREADS=1.","category":"page"},{"location":"api/#API-reference","page":"API reference","title":"API reference","text":"","category":"section"},{"location":"api/","page":"API reference","title":"API reference","text":"HiddenMarkovModels\nHMMs","category":"page"},{"location":"api/#HiddenMarkovModels","page":"API reference","title":"HiddenMarkovModels","text":"HiddenMarkovModels\n\nA Julia package for HMM modeling, simulation, inference and learning.\n\n\n\n\n\n","category":"module"},{"location":"api/#HiddenMarkovModels.HMMs","page":"API reference","title":"HiddenMarkovModels.HMMs","text":"HMMs\n\nAlias for the module HiddenMarkovModels.\n\n\n\n\n\n","category":"module"},{"location":"api/#Types","page":"API reference","title":"Types","text":"","category":"section"},{"location":"api/","page":"API reference","title":"API reference","text":"HMMs.AbstractModel","category":"page"},{"location":"api/#HiddenMarkovModels.AbstractModel","page":"API reference","title":"HiddenMarkovModels.AbstractModel","text":"AbstractModel\n\nAbstract supertype for AbstractMarkovChain and AbstractHiddenMarkovModel.\n\nNot exported.\n\n\n\n\n\n","category":"type"},{"location":"api/#Markov-chains","page":"API reference","title":"Markov chains","text":"","category":"section"},{"location":"api/","page":"API reference","title":"API reference","text":"AbstractMarkovChain\nMarkovChain\nAbstractMC\nMC","category":"page"},{"location":"api/#HiddenMarkovModels.AbstractMarkovChain","page":"API reference","title":"HiddenMarkovModels.AbstractMarkovChain","text":"AbstractMarkovChain <: AbstractModel\n\nAbstract supertype for a Markov chain amenable to simulation, inference and learning.\n\nRequired interface\n\ninitial_distribution(mc)\ntransition_matrix(mc)\nfit!(mc, init_count, trans_count) (optional)\n\nApplicable methods\n\nrand([rng,] mc, T)\nlogdensityof(mc, state_seq)\nfit(mc, state_seq_or_seqs) (if fit! is implemented)\n\n\n\n\n\n","category":"type"},{"location":"api/#HiddenMarkovModels.MarkovChain","page":"API reference","title":"HiddenMarkovModels.MarkovChain","text":"MarkovChain <: AbstractMarkovChain\n\nBasic implementation of a discrete-state Markov chain.\n\nFields\n\ninit::AbstractVector: initial state probabilities\ntrans::AbstractMatrix: state transition matrix\n\n\n\n\n\n","category":"type"},{"location":"api/#HiddenMarkovModels.AbstractMC","page":"API reference","title":"HiddenMarkovModels.AbstractMC","text":"AbstractMC\n\nAlias for the type AbstractMarkovChain.\n\n\n\n\n\n","category":"type"},{"location":"api/#HiddenMarkovModels.MC","page":"API reference","title":"HiddenMarkovModels.MC","text":"MC\n\nAlias for the type MarkovChain.\n\n\n\n\n\n","category":"type"},{"location":"api/#Hidden-Markov-Models","page":"API reference","title":"Hidden Markov Models","text":"","category":"section"},{"location":"api/","page":"API reference","title":"API reference","text":"AbstractHiddenMarkovModel\nHiddenMarkovModel\nAbstractHMM\nHMM","category":"page"},{"location":"api/#HiddenMarkovModels.AbstractHiddenMarkovModel","page":"API reference","title":"HiddenMarkovModels.AbstractHiddenMarkovModel","text":"AbstractHiddenMarkovModel <: AbstractModel\n\nAbstract supertype for an HMM amenable to simulation, inference and learning.\n\nRequired interface\n\ninitial_distribution(hmm)\ntransition_matrix(hmm)\nobs_distribution(hmm, i)\nfit!(hmm, init_count, trans_count, obs_seq, state_marginals) (optional)\n\nApplicable methods\n\nrand([rng,] hmm, T)\nlogdensityof(hmm, obs_seq) / logdensityof(hmm, obs_seqs, nb_seqs)\nviterbi(hmm, obs_seq) / viterbi(hmm, obs_seqs, nb_seqs)\nforward_backward(hmm, obs_seq) / forward_backward(hmm, obs_seqs, nb_seqs)\nbaum_welch(hmm, obs_seq) / baum_welch(hmm, obs_seqs, nb_seqs) if fit! is implemented\n\n\n\n\n\n","category":"type"},{"location":"api/#HiddenMarkovModels.HiddenMarkovModel","page":"API reference","title":"HiddenMarkovModels.HiddenMarkovModel","text":"HiddenMarkovModel{D} <: AbstractHiddenMarkovModel\n\nBasic implementation of an HMM.\n\nFields\n\ninit::AbstractVector: initial state probabilities\ntrans::AbstractMatrix: state transition matrix\ndists::AbstractVector{D}: observation distributions\n\n\n\n\n\n","category":"type"},{"location":"api/#HiddenMarkovModels.AbstractHMM","page":"API reference","title":"HiddenMarkovModels.AbstractHMM","text":"AbstractHMM\n\nAlias for the type AbstractHiddenMarkovModel.\n\n\n\n\n\n","category":"type"},{"location":"api/#HiddenMarkovModels.HMM","page":"API reference","title":"HiddenMarkovModels.HMM","text":"HMM\n\nAlias for the type HiddenMarkovModel.\n\n\n\n\n\n","category":"type"},{"location":"api/#Basics","page":"API reference","title":"Basics","text":"","category":"section"},{"location":"api/","page":"API reference","title":"API reference","text":"rand\nlength\ninitial_distribution\ntransition_matrix\nobs_distribution","category":"page"},{"location":"api/#Base.rand","page":"API reference","title":"Base.rand","text":"rand([rng=default_rng(),] model::AbstractModel, T)\n\nSimulate model for T time steps with a specified rng.\n\n\n\n\n\n","category":"function"},{"location":"api/#Base.length","page":"API reference","title":"Base.length","text":"length(model::AbstractModel)\n\nReturn the number of states of model.\n\n\n\n\n\n","category":"function"},{"location":"api/#HiddenMarkovModels.initial_distribution","page":"API reference","title":"HiddenMarkovModels.initial_distribution","text":"initial_distribution(model::AbstractModel)\n\nReturn the initial state probabilities of model.\n\n\n\n\n\n","category":"function"},{"location":"api/#HiddenMarkovModels.transition_matrix","page":"API reference","title":"HiddenMarkovModels.transition_matrix","text":"transition_matrix(model::AbstractModel)\n\nReturn the state transition probabilities of model.\n\n\n\n\n\n","category":"function"},{"location":"api/#HiddenMarkovModels.obs_distribution","page":"API reference","title":"HiddenMarkovModels.obs_distribution","text":"obs_distribution(hmm::AbstractHMM, i)\n\nReturn the observation distribution of hmm associated with state i.\n\nThe returned object dist must implement\n\nrand(rng, dist)\nDensityInterface.logdensityof(dist, x)\n\n\n\n\n\n","category":"function"},{"location":"api/#Inference","page":"API reference","title":"Inference","text":"","category":"section"},{"location":"api/","page":"API reference","title":"API reference","text":"logdensityof\nviterbi\nforward_backward","category":"page"},{"location":"api/#DensityInterface.logdensityof","page":"API reference","title":"DensityInterface.logdensityof","text":"logdensityof(mc, state_seq)\n\nCompute the loglikelihood of a single state sequence for a Markov chain.\n\n\n\n\n\nlogdensityof(hmm, obs_seq)\n\nApply the forward algorithm to compute the loglikelihood of a single observation sequence for an HMM.\n\n\n\n\n\nlogdensityof(hmm, obs_seqs, nb_seqs)\n\nApply the forward algorithm to compute the total loglikelihood of multiple observation sequences for an HMM.\n\nwarning: Multithreading\nThis function is parallelized across sequences.\n\n\n\n\n\n","category":"function"},{"location":"api/#HiddenMarkovModels.viterbi","page":"API reference","title":"HiddenMarkovModels.viterbi","text":"viterbi(hmm, obs_seq)\n\nApply the Viterbi algorithm to compute the most likely state sequence of an HMM for a single observation sequence.\n\n\n\n\n\nviterbi(hmm, obs_seqs, nb_seqs)\n\nApply the Viterbi algorithm to compute the most likely state sequences of an HMM for multiple observation sequences.\n\nwarning: Multithreading\nThis function is parallelized across sequences.\n\n\n\n\n\n","category":"function"},{"location":"api/#HiddenMarkovModels.forward_backward","page":"API reference","title":"HiddenMarkovModels.forward_backward","text":"forward_backward(hmm, obs_seq)\n\nApply the forward-backward algorithm to estimate the posterior state marginals of an HMM for a single observation sequence, and return a ForwardBackwardStorage.\n\n\n\n\n\nforward_backward(hmm, obs_seqs, nb_seqs)\n\nApply the forward-backward algorithm to estimate the posterior state marginals of an HMM for multiple observation sequences, and return a ForwardBackwardStorage.\n\nwarning: Multithreading\nThis function is parallelized across sequences.\n\n\n\n\n\n","category":"function"},{"location":"api/#Learning","page":"API reference","title":"Learning","text":"","category":"section"},{"location":"api/","page":"API reference","title":"API reference","text":"fit!\nfit\nbaum_welch","category":"page"},{"location":"api/#StatsAPI.fit!","page":"API reference","title":"StatsAPI.fit!","text":"fit!(mc::MC, init_count, trans_count)\n\nUpdate mc in-place based on information generated from a state sequence.\n\n\n\n\n\nfit!(hmm::HMM, init_count, trans_count, obs_seq, state_marginals)\n\nUpdate hmm in-place based on information generated during forward-backward.\n\n\n\n\n\n","category":"function"},{"location":"api/#StatsAPI.fit","page":"API reference","title":"StatsAPI.fit","text":"fit(mc, state_seq_or_seqs)\n\nFit a Markov chain of the same type as mc to one or several state sequence(s).\n\nBeware that mc must be an actual object of type MarkovChain, and not the type itself as is usually done eg. in Distributions.jl.\n\n\n\n\n\n","category":"function"},{"location":"api/#HiddenMarkovModels.baum_welch","page":"API reference","title":"HiddenMarkovModels.baum_welch","text":"baum_welch(\n    hmm_init, obs_seq;\n    atol, max_iterations, check_loglikelihood_increasing\n)\n\nApply the Baum-Welch algorithm to estimate the parameters of an HMM and return a tuple (hmm, logL_evolution).\n\nThe procedure is based on a single observation sequence and initialized with hmm_init.\n\n\n\n\n\nbaum_welch(\n    hmm_init, obs_seqs, nb_seqs;\n    atol, max_iterations, check_loglikelihood_increasing\n)\n\nApply the Baum-Welch algorithm to estimate the parameters of an HMM and return a tuple (hmm, logL_evolution).\n\nThe procedure is based on multiple observation sequences and initialized with hmm_init.\n\nwarning: Multithreading\nThis function is parallelized across sequences.\n\n\n\n\n\n","category":"function"},{"location":"api/#Internals","page":"API reference","title":"Internals","text":"","category":"section"},{"location":"api/","page":"API reference","title":"API reference","text":"HMMs.ForwardBackwardStorage\nHMMs.fit_element_from_sequence!\nHMMs.LightDiagNormal","category":"page"},{"location":"api/#HiddenMarkovModels.ForwardBackwardStorage","page":"API reference","title":"HiddenMarkovModels.ForwardBackwardStorage","text":"ForwardBackwardStorage{R}\n\nStore forward-backward quantities with element type R.\n\nFields\n\nα::Matrix{R}: forward variables\nβ::Matrix{R}: backward variables\nγ::Matrix{R}: one-state marginals\nξ::Array{R,3}: two-state marginals\n_c::Vector{R}: forward variable inverse normalizations\n_m::Vector{R}: maximum of logB\n_Bβ::Matrix{R}: stabilized product Bβ\n\n\n\n\n\n","category":"type"},{"location":"api/#HiddenMarkovModels.fit_element_from_sequence!","page":"API reference","title":"HiddenMarkovModels.fit_element_from_sequence!","text":"fit_element_from_sequence!(dists, i, x, w)\n\nModify the i-th element of dists by fitting it to an observation sequence x with associated weight sequence w.\n\nThe default behavior is a fallback on StatsAPI.fit!, which users are encouraged to implement if their observation distributions are mutable. If this is not possible, please override fit_element_from_sequence! directly.\n\n\n\n\n\n","category":"function"},{"location":"api/#HiddenMarkovModels.LightDiagNormal","page":"API reference","title":"HiddenMarkovModels.LightDiagNormal","text":"LightDiagNormal\n\nAn HMMs-compatible implementation of a multivariate normal distribution with diagonal covariance, enabling allocation-free estimation.\n\nThis is not part of the public API and is expected to change.\n\n\n\n\n\n","category":"type"},{"location":"api/#Notations","page":"API reference","title":"Notations","text":"","category":"section"},{"location":"api/#Integers","page":"API reference","title":"Integers","text":"","category":"section"},{"location":"api/","page":"API reference","title":"API reference","text":"N: number of states\nD: dimension of the observations\nT: trajectory length\nK: number of trajectories","category":"page"},{"location":"api/#Models-and-simulations","page":"API reference","title":"Models and simulations","text":"","category":"section"},{"location":"api/","page":"API reference","title":"API reference","text":"p or init: initial_distribution (vector of state probabilities)\nA or trans: transition_matrix (matrix of transition probabilities)\ndists: observation distribution (vector of rand-able and logdensityof-able objects)\nstate_seq: a sequence of states (vector of integers)\nobs_seq: a sequence of observations (vector of individual observations)\nobs_seqs: several sequences of observations","category":"page"},{"location":"api/#Forward-backward","page":"API reference","title":"Forward backward","text":"","category":"section"},{"location":"api/","page":"API reference","title":"API reference","text":"(log)b: vector of observation (log)likelihoods by state for an individual observation\n(log)B: matrix of observation (log)likelihoods by state for a sequence of observations\nα: forward variables\nβ: backward variables\nγ: one-state marginals\nξ: two-state marginals\nlogL: loglikelihood of a sequence of observations","category":"page"},{"location":"api/#Index","page":"API reference","title":"Index","text":"","category":"section"},{"location":"api/","page":"API reference","title":"API reference","text":"","category":"page"},{"location":"alternatives/#Alternatives","page":"Alternatives","title":"Alternatives","text":"","category":"section"},{"location":"alternatives/#Julia","page":"Alternatives","title":"Julia","text":"","category":"section"},{"location":"alternatives/","page":"Alternatives","title":"Alternatives","text":"HMMBase.jl\nHMMGradients.jl\nMarkovModels.jl\nControlledHiddenMarkovModels.jl","category":"page"},{"location":"alternatives/#Python","page":"Alternatives","title":"Python","text":"","category":"section"},{"location":"alternatives/","page":"Alternatives","title":"Alternatives","text":"hmmlearn\npomegranate","category":"page"},{"location":"alternatives/#Comparison","page":"Alternatives","title":"Comparison","text":"","category":"section"},{"location":"alternatives/","page":"Alternatives","title":"Alternatives","text":"Here is a feature comparison between HMMBase.jl and HiddenMarkovModels.jl:","category":"page"},{"location":"alternatives/","page":"Alternatives","title":"Alternatives","text":" HMMBase.jl HiddenMarkovModels.jl\nNumber types Float64 anything\nObservation types Number or Vector anything\nObservation distributions from Distributions.jl satisfying DensityInterface.jl\nPriors / structures no customizable\nAutodiff no forward mode (for now)\nMultiple sequences no yes","category":"page"},{"location":"roadmap/#Roadmap","page":"Roadmap","title":"Roadmap","text":"","category":"section"},{"location":"roadmap/","page":"Roadmap","title":"Roadmap","text":"Here are some of the things that I would like to work on soon-ish:","category":"page"},{"location":"roadmap/","page":"Roadmap","title":"Roadmap","text":"numerical stability in large-dimensional settings with sparse transitions\nreverse mode autodiff with ChainRules.jl\nSIMD optimization with LoopVectorization.jl or Tullio.jl\nspectral estimation methods\ninput-output HMMs in my other package ControlledMarkovModels.jl","category":"page"},{"location":"roadmap/","page":"Roadmap","title":"Roadmap","text":"Contributors are welcome!","category":"page"},{"location":"roadmap/","page":"Roadmap","title":"Roadmap","text":"In the long run, I will probably transfer this package to JuliaStats, but for now I'd like to keep control until things are stabilized.","category":"page"},{"location":"background/#Background","page":"Background","title":"Background","text":"","category":"section"},{"location":"background/#What-is-an-HMM?","page":"Background","title":"What is an HMM?","text":"","category":"section"},{"location":"background/","page":"Background","title":"Background","text":"Hidden Markov Models (HMMs for short) are a statistical modeling framework that is ubiquitous in signal processing, bioinformatics and plenty of other fields. They capture the distribution of an observation sequence (Y_t) by assuming the existence of a latent state sequence (X_t) such that:","category":"page"},{"location":"background/","page":"Background","title":"Background","text":"the sequence (X_t) follows a (discrete time, discrete space) Markov chain\nfor each t, the distribution of Y_t is entirely determined by the value of X_t","category":"page"},{"location":"background/#What-can-we-do-with-it?","page":"Background","title":"What can we do with it?","text":"","category":"section"},{"location":"background/","page":"Background","title":"Background","text":"Imagine we are given an observation sequence (Y_t) and a parametric family of HMMs p_theta colon theta in Theta. We can list three fundamental problems, each of which has a solution that relies on dynamic programming:","category":"page"},{"location":"background/","page":"Background","title":"Background","text":"Problem Goal Solution\nEvaluation Likelihood of the observation sequence p_theta(Y) for a fixed theta Forward algorithm\nDecoding Most likely state sequence argmax_X p_theta(X vert Y) for a fixed theta Viterbi algorithm\nLearning Best parameter argmax_theta p_theta(Y) Baum-Welch (EM) algorithm","category":"page"},{"location":"background/","page":"Background","title":"Background","text":"Our whole package is based on the tutorial by (Rabiner, 1989), you can refer to it for more details.","category":"page"},{"location":"background/#Bibliography","page":"Background","title":"Bibliography","text":"","category":"section"},{"location":"background/","page":"Background","title":"Background","text":"","category":"page"},{"location":"#HiddenMarkovModels.jl","page":"Home","title":"HiddenMarkovModels.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A Julia package for HMM modeling, simulation, inference and learning.","category":"page"},{"location":"#Main-features","page":"Home","title":"Main features","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"info: Performance\nallocation-free versions of core functions\nlinear algebra subroutines\nmultithreading\ncompatibility with SparseArrays and StaticArrays.jl","category":"page"},{"location":"","page":"Home","title":"Home","text":"info: Genericity\nnumber types are not restricted\nobservations can be arbitrary Julia objects (not just scalars or arrays)\nemission distributions dist only need to implement\nrand(rng, dist)\nlogdensityof(dist, x) (following DensityInterface.jl)","category":"page"},{"location":"","page":"Home","title":"Home","text":"info: Automatic differentiation\nin forward mode with ForwardDiff.jl\n(soon) in reverse mode with ChainRules.jl","category":"page"},{"location":"","page":"Home","title":"Home","text":"info: Reliability\nsame outputs as an independent other package, up to numerical precision\nquality checks with Aqua.jl\ncorrectness and type stability checks with JET.jl\ndocumentation with Documenter.jl\nbenchmarks compatible with PkgBenchmark.jl","category":"page"},{"location":"#Acknowledgements","page":"Home","title":"Acknowledgements","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A big thank you to Maxime Mouchet and Jacob Schreiber, the respective lead devs of HMMBase.jl and pomegranate, for their help and advice.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Logo by Clément Mantoux based on a portrait of Andrey Markov.","category":"page"},{"location":"tutorial/#Tutorial","page":"Tutorial","title":"Tutorial","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"warning: Work in progress\nIn the meantime, you can take a look at the files in test, which demonstrate more sophisticated ways to use the package.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"using HiddenMarkovModels\nusing Distributions","category":"page"},{"location":"tutorial/#Using-the-built-in-HMM","page":"Tutorial","title":"Using the built-in HMM","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Constructing a model:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"function random_gaussian_hmm(N)\n    p = ones(N) / N  # initial distribution\n    A = rand_trans_mat(N)  # transition matrix\n    dists = [Normal(randn(), 1.0) for n in 1:N]  # observation distributions\n    return HMM(p, A, dists)\nend;","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Checking its contents:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"hmm = random_gaussian_hmm(3)\ntransition_matrix(hmm)\n[obs_distribution(hmm, i) for i in 1:length(hmm)]","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Simulating a sequence:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"state_seq, obs_seq = rand(hmm, 1000);\nfirst(state_seq, 10)'\nfirst(obs_seq, 10)'","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Computing the loglikelihood of an observation sequence:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"logdensityof(hmm, obs_seq)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Inferring the most likely state sequence:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"most_likely_state_seq = viterbi(hmm, obs_seq);\nfirst(most_likely_state_seq, 10)'","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Learning the parameters based on an observation sequence:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"hmm_init = random_gaussian_hmm(3)\nhmm_est, logL_evolution = baum_welch(hmm_init, obs_seq);\nfirst(logL_evolution), last(logL_evolution)\ntransition_matrix(hmm_est)\n[obs_distribution(hmm_est, i) for i in 1:length(hmm)]","category":"page"},{"location":"tutorial/#Making-your-own-HMM","page":"Tutorial","title":"Making your own HMM","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"The built-in HMM is perfect when the initial state distribution p, transition matrix A and emission distributions dists are three separate objects, which means their re-estimation can be done separately. But in some cases these parameters might be correlated. For instance, you may want an HMM whose initial state distribution always corresponds to the equilibrium distribution associated with the transition matrix.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"In such cases, it is necessary to implement a new subtype of AbstractHMM with all its required methods. To ascertain that your type indeed satisfies the interface, you can use RequiredInterfaces.jl as follows:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"using RequiredInterfaces: check_interface_implemented\n\nstruct EmptyHMM end\n\ncheck_interface_implemented(AbstractHMM, HMM)\ncheck_interface_implemented(AbstractHMM, EmptyHMM)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Note that this test does not check the fit! method. Since it is only used in the Baum-Welch algorithm, it is an optional part of the AbstractHMM interface.","category":"page"}]
}
