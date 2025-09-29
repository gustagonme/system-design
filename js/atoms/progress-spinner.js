// Progress Spinner - Basado en ILibTbProgressSpinner interface
// Referencia: knowledge_base/tech_block_lib/atoms/progress_spinner/

// 1. Progress Spinner básico con valor específico
export const progressSpinnerBasicCustom = {
    value: 75,
    infinite: true,
    libTbClick: e => {
      console.log('Click en spinner', e);
    },
};

// 2. Progress Spinner integrado con icono
export const progressSpinnerIntegratedCustom = {
    integrated: true,
    class: 'progress-spinner-integrated-custom',
    libTbClick: (e) => {
        console.log('Click en progress spinner integrado', e);
    }
};

// 3. Progress Spinner infinito (loading continuo)
export const progressSpinnerInfiniteCustom = {
    infinite: true,
    strokeWidth: 3,
    animationDuration: '1s',
    style: { 
        height: '64px', 
        width: '64px' 
    },
    icon: 'fas fa-sync-alt',
    text: {
        body: 'Cargando...',
        label: 'Espere'
    },
    class: 'progress-spinner-infinite-custom',
    libTbClick: (e) => {
        console.log('Click en progress spinner infinito', e);
    }
};

