// Chip - Basado en ILibTbChip interface
// Referencia: knowledge_base/tech_block_lib/atoms/chip/

// Chip básico (como el ejemplo de la documentación)
export const chipCustom = {
    label: 'Text string',
    icon: 'fal fa-location-circle',
    img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    class: 'class__custom',
    removable: true,
    libTbOnRemove: (e) => {
        console.log('Chip básico eliminado', e);
    },
    libTbClick: (e) => {
        console.log('Click en chip básico', e);
    }
};

// Chip con imagen del avatar
export const chipImageCustom = {
    label: 'John Doe',
    img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    size: 'large',
    removable: true,
    class: 'chip-image-custom',
    libTbOnRemove: (e) => {
        console.log('Chip con imagen eliminado', e);
    },
    libTbClick: (e) => {
        console.log('Click en chip con imagen', e);
    }
};

// Chip solo con icono - tamaño small
export const chipIconCustom = {
    label: 'Favorito',
    icon: 'fas fa-star',
    size: 'small',
    removable: false,
    class: 'chip-icon-custom',
    libTbClick: (e) => {
        console.log('Click en chip con icono', e);
    }
};

// Chip removable con icono personalizado de eliminar
export const chipRemovableCustom = {
    label: 'Etiqueta removible',
    icon: 'fas fa-tag',
    removable: true,
    iconRemove: 'fas fa-times-circle',
    class: 'chip-removable-custom',
    libTbOnRemove: (e) => {
        console.log('Chip removible eliminado', e);
    },
    libTbClick: (e) => {
        console.log('Click en chip removible', e);
    }
};

// Chip activo
export const chipActiveCustom = {
    label: 'Activo',
    icon: 'fas fa-check-circle',
    active: true,
    size: 'large',
    class: 'chip-active-custom',
    libTbClick: (e) => {
        console.log('Click en chip activo', e);
    }
};

// Chip deshabilitado
export const chipDisabledCustom = {
    label: 'Deshabilitado',
    icon: 'fas fa-ban',
    disabled: true,
    removable: true,
    class: 'chip-disabled-custom',
    libTbOnRemove: (e) => {
        console.log('Chip deshabilitado eliminado (no debería ejecutarse)', e);
    },
    libTbClick: (e) => {
        console.log('Click en chip deshabilitado (no debería ejecutarse)', e);
    }
};

// Chip con imagen del avatar y atributos avanzados
export const chipAdvancedCustom = {
    dataQaId: 'advanced-chip',
    label: 'Usuario Premium',
    img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    size: 'large',
    removable: true,
    iconRemove: 'fas fa-user-times',
    tabIndex: 3,
    active: true,
    style: {
        margin: '5px',
        fontWeight: 'bold'
    },
    class: 'chip-advanced-custom',
    libTbOnRemove: (e) => {
        console.log('Chip avanzado eliminado', e);
    },
    libTbClick: (e) => {
        console.log('Click en chip avanzado', e);
    }
};

// Chip simple sin imagen ni icono
export const chipSimpleCustom = {
    label: 'Chip Simple',
    size: 'small',
    class: 'chip-simple-custom',
    libTbClick: (e) => {
        console.log('Click en chip simple', e);
    }
};
