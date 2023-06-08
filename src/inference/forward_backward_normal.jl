function forward!(fb::ForwardBackwardStorage, p, A, B)
    (; α, c) = fb
    T = size(α, 2)
    @views begin
        α[:, 1] .= p .* B[:, 1]
        c[1] = inv(sum(α[:, 1]))
        α[:, 1] .*= c[1]
    end
    @views for t in 1:(T - 1)
        mul!(α[:, t + 1], A', α[:, t])
        α[:, t + 1] .*= B[:, t + 1]
        c[t + 1] = inv(sum(α[:, t + 1]))
        α[:, t + 1] .*= c[t + 1]
    end
    return nothing
end

function backward!(fb::ForwardBackwardStorage{R}, A, B) where {R}
    (; β, c, _Bβ) = fb
    T = size(β, 2)
    β[:, T] .= one(R)
    @views for t in (T - 1):-1:1
        _Bβ[:, t + 1] .= B[:, t + 1] .* β[:, t + 1]
        mul!(β[:, t], A, _Bβ[:, t + 1])
        β[:, t] .*= c[t]
    end
    return nothing
end

function marginals!(fb::ForwardBackwardStorage, A)
    (; α, β, _Bβ, γ, ξ) = fb
    T = size(γ, 2)
    @views for t in 1:T
        γ[:, t] .= α[:, t] .* β[:, t]
        normalization = inv(sum(γ[:, t]))
        γ[:, t] .*= normalization
    end
    @views for t in 1:(T - 1)
        ξ[:, :, t] .= α[:, t] .* A .* _Bβ[:, t + 1]'
        normalization = inv(sum(ξ[:, :, t]))
        ξ[:, :, t] .*= normalization
    end
    return nothing
end

function forward_backward!(fb::ForwardBackwardStorage, sp::StateProcess, B)
    p = initial_distribution(sp)
    A = transition_matrix(sp)
    forward!(fb, p, A, B)
    backward!(fb, A, B)
    marginals!(fb, A)
    return nothing
end
