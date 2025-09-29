// Indicator Gallery - Basado en ILibTbIndicatorGallery interface
// Referencia: knowledge_base/tech_block_lib/atoms/indicator_gallery/

// Items de ejemplo para la galería (imágenes de productos)
const galleryItems = [
    { id: 1, title: 'Producto 1', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop' },
    { id: 2, title: 'Producto 2', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop' },
    { id: 3, title: 'Producto 3', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop' },
    { id: 4, title: 'Producto 4', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop' },
    { id: 5, title: 'Producto 5', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop' },
    { id: 6, title: 'Producto 6', image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=300&fit=crop' },
    { id: 7, title: 'Producto 7', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop' },
    { id: 8, title: 'Producto 8', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=300&fit=crop' }
];

// Indicator Gallery básico con autoplay (como el ejemplo de la documentación)
export const indicatorGalleryCustom = {
    dataQaId: 'indicator-gallery-productos',
    items: galleryItems,
    activeIndex: 0, // Índice inicial activo
    visibleItems: 5, // Número de indicadores visibles (impar para mejor UX)
    width: 12, // Ancho del indicador en px
    height: 12, // Alto del indicador en px
    tabindex: 0, // Tabindex para accesibilidad
    autoplayInterval: 3000, // Autoplay cada 3 segundos
    playIcon: 'fas fa-play', // Icono de reproducir
    pauseIcon: 'fas fa-pause', // Icono de pausar
    positionButton: 'right', // Posición del botón de play/pause
    style: {
        margin: '20px 0',
        padding: '10px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
    },
    class: 'indicator-gallery-custom',
    libTbButton: {
        // Configuración del botón de play/pause basado en ILibTbButton
        styleBtn: 'fill',
        typeBtn: 'secondary',
        icon: 'fas fa-pause', // Inicialmente en pause porque el autoplay está activo
        iconPosition: 'left',
        size: 'small',
        class: 'indicator-gallery-control-button',
        libTbClick: (e) => {
            console.log('Botón de control de autoplay clickeado', e);
            // Aquí se manejaría la lógica de play/pause
            // El componente maneja automáticamente el cambio de icono
        }
    },
    libTbClick: ({ index, item }) => {
        console.log('Indicator Gallery - Click en indicador:', index, item);
        console.log(`Navegando a: ${item.title} (${item.image})`);
        
        // Actualizar el índice activo
        indicatorGalleryCustom.activeIndex = index;
        
        // Aquí podrías actualizar una imagen principal o contenido relacionado
        console.log(`Mostrando producto: ${item.title}`);
    },
    libTbChange: ({ index, item }) => {
        console.log('Indicator Gallery - Cambio automático (autoplay):', index, item);
        console.log(`Autoplay cambió a: ${item.title} (${item.image})`);
        
        // Este evento solo se ejecuta cuando hay autoplayInterval configurado
        // Útil para sincronizar con otros componentes (como un carousel principal)
        
        // Actualizar el índice activo
        indicatorGalleryCustom.activeIndex = index;
        
        // Ejemplo de lógica adicional durante el autoplay
        console.log(`Autoplay mostrando: ${item.title} - Imagen: ${index + 1}/${galleryItems.length}`);
    }
};
