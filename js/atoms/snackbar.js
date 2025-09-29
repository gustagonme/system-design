// Snackbar - Basado en ILibTbSnackbar interface
// Referencia: knowledge_base/tech_block_lib/atoms/snackbar/

// Método para actualizar el snackbar en el DOM
const updateSnackbarElement = () => {
    const snackbarElement = document.getElementById('snackbar-1');
    if (snackbarElement) {
        snackbarElement.custom = { ...snackbarCustom };
    }
};

// Configuración del Snackbar
export const snackbarCustom = {
    message: 'Esta es una notificación de ejemplo. Se cerrará automáticamente en 5 segundos.',
    position: 'bottom-right',
    orientation: 'horizontal',
    show: false, // Inicialmente oculto
    life: 5000, // Se cierra automáticamente después de 5 segundos
    autoZIndex: true,
    baseZIndex: 1000,
    showTransitionOptions: '300ms ease-out',
    hideTransitionOptions: '250ms ease-in',
    class: 'snackbar-custom',
    style: {
        maxWidth: '400px'
    },
    libTbButton: {
        label: 'Cerrar',
        styleBtn: 'text',
        typeBtn: 'primary',
        icon: 'fas fa-times',
        iconPosition: 'right',
        libTbClick: () => {
            console.log('Cerrando snackbar manualmente');
            // El snackbar se cerrará automáticamente cuando se haga click
            snackbarCustom.show = false;
            // Actualizar el elemento usando el método reutilizable
            updateSnackbarElement();
        }
    }
};

// Botón para mostrar el Snackbar (basado en ILibTbButton de la knowledge base)
export const snackbarTriggerButtonCustom = {
    label: 'Mostrar Snackbar',
    styleBtn: 'fill',
    typeBtn: 'primary',
    icon: 'fas fa-bell',
    iconPosition: 'left',
    class: 'snackbar-trigger-button',
    libTbClick: (e) => {
        console.log('Mostrando snackbar', e);
        // Mostrar el snackbar
        snackbarCustom.show = true;
        
        // Actualizar el elemento usando el método reutilizable
        updateSnackbarElement();
    }
};
