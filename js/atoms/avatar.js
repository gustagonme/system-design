// Avatar - Basado en ILibTbAvatar interface
// Referencia: knowledge_base/tech_block_lib/atoms/avatar/

// Avatar con label y tamaño xlarge (como el ejemplo de la documentación)
export const avatarCustom = {
    label: 'SB',
    icon: 'fa-light fa-user',
    img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    size: 'xlarge',
    showButton: true,
    libTbButton: {
        icon: 'fa-light fa-pencil',
        libTbClick: (e) => {
            console.log('Click en botón de edición del avatar', e);
        },
    },
    libTbClick: (e) => {
        console.log('Click en avatar', e);
    }
};

// Avatar con solo label - tamaño large
export const avatarLabelCustom = {
    label: 'JD',
    size: 'large',
    class: 'avatar-label-custom',
    libTbClick: (e) => {
        console.log('Click en avatar con label', e);
    }
};

// Avatar con solo icono - tamaño small
export const avatarIconCustom = {
    icon: 'fas fa-user-circle',
    size: 'small',
    style: { 
        fontSize: '2rem'
    },
    class: 'avatar-icon-custom',
    libTbClick: (e) => {
        console.log('Click en avatar con icono', e);
    }
};

// Avatar con imagen - tamaño large
export const avatarImageCustom = {
    img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    size: 'large',
    class: 'avatar-image-custom',
    libTbClick: (e) => {
        console.log('Click en avatar con imagen', e);
    }
};

// Avatar con botón de edición - tamaño xlarge
export const avatarWithButtonCustom = {
    label: 'AB',
    size: 'xlarge',
    showButton: true,
    libTbButton: {
        icon: 'fas fa-edit',
        typeBtn: 'secondary',
        libTbClick: (e) => {
            console.log('Editando avatar', e);
        }
    },
    libTbClick: (e) => {
        console.log('Click en avatar con botón', e);
    }
};
