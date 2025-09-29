// Button Examples - Basado en ILibTbButton interface
// Referencia: knowledge_base/tech_block_lib/atoms/button/

// Button básico primary
export const buttonPrimaryCustom = {
    label: 'Primary Button',
    styleBtn: 'fill',
    typeBtn: 'primary',
    libTbClick: (e) => {
        console.log('Click en button primary', e);
    }
};

// Button secondary con icono
export const buttonSecondaryCustom = {
    label: 'Secondary Button',
    styleBtn: 'fill',
    typeBtn: 'secondary',
    icon: 'fas fa-user',
    iconPosition: 'left',
    libTbClick: (e) => {
        console.log('Click en button secondary', e);
    }
};

// Button tertiary stroke
export const buttonTertiaryCustom = {
    label: 'Tertiary Button',
    styleBtn: 'stroke',
    typeBtn: 'tertiary',
    icon: 'fas fa-cog',
    iconPosition: 'right',
    libTbClick: (e) => {
        console.log('Click en button tertiary', e);
    }
};

// Button error
export const buttonErrorCustom = {
    label: 'Error Button',
    styleBtn: 'fill',
    typeBtn: 'error',
    icon: 'fas fa-exclamation-triangle',
    iconPosition: 'left',
    libTbClick: (e) => {
        console.log('Click en button error', e);
    }
};

// Button text style
export const buttonTextCustom = {
    label: 'Text Button',
    styleBtn: 'text',
    typeBtn: 'primary',
    icon: 'fas fa-link',
    iconPosition: 'left',
    libTbClick: (e) => {
        console.log('Click en button text', e);
    }
};

// Button con loading animado
export const buttonLoadingCustom = {
    label: '',
    styleBtn: 'fill',
    typeBtn: 'primary',
    loading: true,
    loadingAnimation: true,
    iconLoading: 'fal fa-circle-notch fa-spin',
    libTbClick: (e) => {
        console.log('Click en button loading', e);
    }
};

// Button con loading sin animación
export const buttonLoadingStaticCustom = {
    label: 'Loading...',
    styleBtn: 'fill',
    typeBtn: 'secondary',
    loading: true,
    loadingAnimation: false,
    iconLoading: 'fas fa-hourglass-half fa-spin',
    libTbClick: (e) => {
        console.log('Click en button loading static', e);
    }
};

// Button disabled
export const buttonDisabledCustom = {
    label: 'Disabled Button',
    styleBtn: 'fill',
    typeBtn: 'primary',
    disabled: true,
    icon: 'fas fa-ban',
    iconPosition: 'left',
    libTbClick: (e) => {
        console.log('Click en button disabled (no debería ejecutarse)', e);
    }
};

// Button solo icono
export const buttonIconOnlyCustom = {
    styleBtn: 'fill',
    typeBtn: 'secondary',
    icon: 'fas fa-heart',
    class: 'button-icon-only',
    libTbClick: (e) => {
        console.log('Click en button icon only', e);
    }
};

// Button con atributos adicionales
export const buttonAdvancedCustom = {
    label: 'Advanced Button',
    styleBtn: 'stroke',
    typeBtn: 'primary',
    icon: 'fas fa-rocket',
    iconPosition: 'left',
    type: 'submit',
    tabindex: 1,
    dataQaId: 'advanced-button',
    name: 'advancedBtn',
    class: 'button-advanced-custom',
    libTbClick: (e) => {
        console.log('Click en button advanced', e);
    },
    libTbKeydown: (e) => {
        console.log('Keydown en button advanced', e);
    }
};
