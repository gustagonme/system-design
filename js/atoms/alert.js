// Alert - Basado en ILibTbAlert interface
// Referencia: knowledge_base/tech_block_lib/atoms/alert/

// Alert Fixed - Info
export const alertFixedInfoCustom = {
    float: false,
    alerts: [{
        type: 'info',
        title: 'Información',
        description: 'Este es un mensaje informativo',
        closable: true,
        icon: 'fas fa-info-circle',
    }],
    bgColor: true,
    class: 'alert-info-custom',
    libTbOnClose: e => {
        console.log('Alert info cerrado', e);
    }
};

// Alert Fixed - Success
export const alertFixedSuccessCustom = {
    float: false,
    alerts: [{
        type: 'success',
        title: 'Éxito',
        description: 'Operación completada correctamente',
        closable: true,
        icon: 'fas fa-check-circle',
    }],
    bgColor: true,
    class: 'alert-success-custom',
    libTbOnClose: e => {
        console.log('Alert success cerrado', e);
    }
};

// Alert Fixed - Warning
export const alertFixedWarningCustom = {
    float: false,
    alerts: [{
        type: 'warning',
        title: 'Advertencia',
        description: 'Por favor revise la información ingresada',
        closable: true,
        icon: 'fas fa-exclamation-triangle',
    }],
    bgColor: true,
    class: 'alert-warning-custom',
    libTbOnClose: e => {
        console.log('Alert warning cerrado', e);
    }
};

// Alert Fixed - Error
export const alertFixedErrorCustom = {
    float: false,
    alerts: [{
        type: 'error',
        title: 'Error',
        description: 'Ha ocurrido un error en el proceso',
        closable: true,
        icon: 'fas fa-times-circle',
    }],
    bgColor: true,
    class: 'alert-error-custom',
    libTbOnClose: e => {
        console.log('Alert error cerrado', e);
    }
};

// Alert Float - Un solo ejemplo
export const alertFloatCustom = {
    key: 'alert-float',
    float: true,
    alerts: [{
        type: 'info',
        title: 'Información',
        description: 'Este es un mensaje informativo',
        closable: true,
        icon: 'fas fa-info-circle',
    }],
    bgColor: true,
    class: 'alert-info-custom',
    position: 'top-right',
    libTbOnClose: e => {
        console.log('Se cerró la alerta flotante', e);
    }
};
