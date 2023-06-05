"""
    HiddenMarkovModels

A Julia package for HMM modeling, simulation, inference and learning.
"""
module HiddenMarkovModels

const HMMs = HiddenMarkovModels

using DensityInterface: DensityInterface, DensityKind, HasDensity, NoDensity
using DensityInterface: densityof, logdensityof
using Distributions: Categorical, fit_mle
using LinearAlgebra: Diagonal, dot, mul!
using Random: AbstractRNG, GLOBAL_RNG

include("utils/probvec.jl")
include("utils/transmat.jl")
include("utils/nan.jl")

include("abstract/abstract_transitions.jl")
include("abstract/abstract_emissions.jl")

include("hmm.jl")

include("inference/likelihoods.jl")
include("inference/forward.jl")
include("inference/backward.jl")
include("inference/marginals.jl")
include("inference/forward_backward.jl")
include("inference/viterbi.jl")
include("inference/baum_welch.jl")

include("concrete/markov_transitions.jl")
include("concrete/vector_emissions.jl")
include("concrete/mynormal.jl")

export HMMs
export AbstractTransitions, nb_states, initial_distribution, transition_matrix
export AbstractEmissions, emission_distribution
export HiddenMarkovModel, HMM
export forward_backward
export viterbi
export baum_welch!
export MarkovTransitions
export VectorEmissions

end
