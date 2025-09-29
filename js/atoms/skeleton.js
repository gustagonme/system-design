// Skeleton - Basado en ILibTbSkeleton interface
// Referencia: knowledge_base/tech_block_lib/atoms/skeleton/

// 1. Skeleton circular (como avatar)
export const skeletonCircularCustom = {
    rounded: true,
    size: '80px', // Tamaño cuadrado para hacer círculo perfecto
    animation: true,
    class: 'skeleton-circular-custom',
    style: {
        borderRadius: '50%' // Hace que sea completamente circular
    }
};

// 2. Skeleton redondeado (rectangular con bordes redondeados)
export const skeletonRoundedCustom = {
    rounded: false,
    width: '200px',
    height: '24px',
    borderRadius: '12px', // Bordes redondeados
    animation: true,
    class: 'skeleton-rounded-custom',
    style: {
        marginBottom: '8px'
    }
};
