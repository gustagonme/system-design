// Checkbox - Basado en ILibTbCheckbox interface
// Referencia: knowledge_base/tech_block_lib/atoms/checkbox/

// Checkbox básico (como el ejemplo de la documentación)
export const checkboxCustom = {
    name: 'terms',
    ngModel: ['Ok'],
    id: 'terms',
    label: 'Acepto los términos',
    value: 'Ok',
    disabled: false,
    libTbChange: e => {
        console.log('Checkbox básico cambió:', e);
    }
};

// Checkbox binario (boolean)
export const checkboxBinaryCustom = {
    name: 'notifications',
    id: 'notifications',
    label: 'Recibir notificaciones',
    binary: true,
    ngModel: true,
    class: 'checkbox-binary-custom',
    libTbChange: e => {
        console.log('Checkbox binario cambió:', e);
    }
};

// Checkbox con icono personalizado
export const checkboxIconCustom = {
    name: 'favorite',
    id: 'favorite',
    label: 'Marcar como favorito',
    value: 'favorite',
    checkboxIcon: 'fas fa-heart',
    ngModel: [],
    class: 'checkbox-icon-custom',
    libTbChange: e => {
        console.log('Checkbox con icono cambió:', e);
    }
};

// Checkbox deshabilitado
export const checkboxDisabledCustom = {
    name: 'disabled-option',
    id: 'disabled-option',
    label: 'Opción deshabilitada',
    value: 'disabled',
    disabled: true,
    ngModel: ['disabled'],
    class: 'checkbox-disabled-custom',
    libTbChange: e => {
        console.log('Checkbox deshabilitado (no debería cambiar):', e);
    }
};

// Checkbox en estado de error
export const checkboxErrorCustom = {
    name: 'required-field',
    id: 'required-field',
    label: 'Campo requerido *',
    value: 'required',
    error: true,
    ngModel: [],
    class: 'checkbox-error-custom',
    libTbChange: e => {
        console.log('Checkbox con error cambió:', e);
    }
};

// Checkbox en modo visualización
export const checkboxViewCustom = {
    name: 'view-only',
    id: 'view-only',
    label: 'Solo lectura (marcado)',
    value: 'view',
    view: true,
    ngModel: ['view'],
    class: 'checkbox-view-custom',
    libTbChange: e => {
        console.log('Checkbox en modo view (no debería cambiar):', e);
    }
};

// Checkbox con atributos avanzados
export const checkboxAdvancedCustom = {
    dataQaId: 'advanced-checkbox',
    name: 'advanced',
    id: 'advanced',
    label: 'Checkbox avanzado',
    value: 'advanced',
    tabindex: 5,
    ngModel: [],
    style: {
        marginBottom: '10px'
    },
    class: 'checkbox-advanced-custom',
    libTbChange: e => {
        console.log('Checkbox avanzado cambió:', e);
    }
};

// Checkbox múltiple (grupo)
export const checkboxMultiple1Custom = {
    name: 'hobbies',
    id: 'hobby-sports',
    label: 'Deportes',
    value: 'sports',
    ngModel: ['sports'],
    class: 'checkbox-multiple-custom',
    libTbChange: e => {
        console.log('Hobby deportes cambió:', e);
    }
};

export const checkboxMultiple2Custom = {
    name: 'hobbies',
    id: 'hobby-music',
    label: 'Música',
    value: 'music',
    ngModel: [],
    class: 'checkbox-multiple-custom',
    libTbChange: e => {
        console.log('Hobby música cambió:', e);
    }
};

export const checkboxMultiple3Custom = {
    name: 'hobbies',
    id: 'hobby-reading',
    label: 'Lectura',
    value: 'reading',
    ngModel: ['reading'],
    class: 'checkbox-multiple-custom',
    libTbChange: e => {
        console.log('Hobby lectura cambió:', e);
    }
};
