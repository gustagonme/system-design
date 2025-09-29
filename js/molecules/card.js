// Card - Basado en ILibTbCard interface
// Referencia: knowledge_base/tech_block_lib/molecules/card/
// Imagen: https://images.unsplash.com/photo-1602867741746-6df80f40b3f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80

// Card completa con imagen, tag, botón, contenido y footer
export const cardCustom = {
    // Orientación de la card
    orientation: 'vertical', // 'vertical' | 'horizontal' | 'horizontal-reverse'
    
    // Mostrar header con imagen
    showHeader: true,
    
    // Imagen del header (usando la imagen proporcionada)
    img: {
        src: 'https://images.unsplash.com/photo-1602867741746-6df80f40b3f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
        alt: 'Tecnología y desarrollo - Imagen de código en pantalla',
        defaultWidth: 400,
        defaultHeight: 250
    },
    
    // Tag en el header (ILibTbTag)
    tagHeader: {
        label: 'Tecnología',
        icon: 'fas fa-code',
        type: 'info', // 'info' | 'warning' | 'error' | 'success'
        size: 'medium', // 'small' | 'medium' | 'large'
        rounded: true,
        class: 'card-header-tag'
    },
    
    // Botón en el header (ILibTbButton)
    buttonHeader: {
        icon: 'fas fa-heart',
        styleBtn: 'text', // 'fill' | 'stroke' | 'text'
        typeBtn: 'secondary', // 'primary' | 'secondary' | 'error' | 'warning' | 'success'
        size: 'medium',
        class: 'card-header-button',
        libTbClick: (e) => {
            console.log('Card - Botón header clickeado:', e);
            console.log('❤️ Agregado a favoritos');
            
            // Cambiar el icono para indicar que está en favoritos
            const currentIcon = cardCustom.buttonHeader.icon;
            if (currentIcon === 'fas fa-heart') {
                cardCustom.buttonHeader.icon = 'fas fa-heart-broken';
                cardCustom.buttonHeader.typeBtn = 'error';
                console.log('💔 Removido de favoritos');
            } else {
                cardCustom.buttonHeader.icon = 'fas fa-heart';
                cardCustom.buttonHeader.typeBtn = 'secondary';
                console.log('❤️ Agregado a favoritos');
            }
            
            // Actualizar el elemento
            updateCardElement();
        }
    },
    
    // Contenido principal
    title: 'Desarrollo de Software Moderno',
    subtitle: 'Tecnologías Frontend y Backend',
    subtitleIcon: 'fas fa-laptop-code', // Icono que acompaña al subtítulo
    description: 'Explora las últimas tendencias en desarrollo de software, desde frameworks de JavaScript hasta arquitecturas de microservicios. Aprende las mejores prácticas para crear aplicaciones escalables y mantenibles.',
    observation: 'Actualizado hace 2 horas • 15 min de lectura',
    
    // Items del footer
    boxItems: [
        {
            icon: 'fas fa-eye',
            text: '1,234 vistas',
            libTbClick: (e) => {
                console.log('Card Footer - Vistas clickeado:', e);
                console.log('👁️ Mostrando estadísticas de visualización');
                console.log('📊 Total de vistas: 1,234');
                console.log('📈 Incremento semanal: +15%');
                console.log('🕒 Última vista: hace 5 minutos');
            }
        },
        {
            icon: 'fas fa-thumbs-up',
            text: '89 likes',
            libTbClick: (e) => {
                console.log('Card Footer - Likes clickeado:', e);
                console.log('👍 Procesando like...');
                
                // Simular incremento de likes
                const currentText = cardCustom.boxItems[1].text;
                const currentLikes = parseInt(currentText.match(/\d+/)[0]);
                const newLikes = currentLikes + 1;
                cardCustom.boxItems[1].text = `${newLikes} likes`;
                cardCustom.boxItems[1].icon = 'fas fa-thumbs-up';
                
                console.log(`✅ Like agregado! Total: ${newLikes} likes`);
                updateCardElement();
                
                // Revertir después de 3 segundos (demo)
                setTimeout(() => {
                    cardCustom.boxItems[1].text = `${currentLikes} likes`;
                    updateCardElement();
                    console.log('🔄 Like revertido (demo)');
                }, 3000);
            }
        },
        {
            icon: 'fas fa-comment',
            text: '23 comentarios',
            libTbClick: (e) => {
                console.log('Card Footer - Comentarios clickeado:', e);
                console.log('💬 Abriendo sección de comentarios...');
                console.log('📝 Comentarios recientes:');
                console.log('   • "Excelente artículo sobre React!" - Usuario1');
                console.log('   • "¿Podrían agregar ejemplos de Vue.js?" - Usuario2');
                console.log('   • "Muy útil para mi proyecto actual" - Usuario3');
                console.log('✍️ Puedes agregar tu comentario aquí');
            }
        },
        {
            icon: 'fas fa-share',
            text: 'Compartir',
            libTbClick: (e) => {
                console.log('Card Footer - Compartir clickeado:', e);
                console.log('📤 Opciones de compartir:');
                console.log('🔗 Copiar enlace');
                console.log('📧 Enviar por email');
                console.log('📱 Compartir en redes sociales');
                console.log('💾 Guardar para más tarde');
                
                // Simular copia al portapapeles
                const articleUrl = 'https://ejemplo.com/desarrollo-software-moderno';
                console.log(`📋 Enlace copiado: ${articleUrl}`);
                console.log('✅ ¡Enlace copiado al portapapeles!');
            }
        }
    ],
    
    // Estilos personalizados
    style: {
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff',
        overflow: 'hidden'
    },
    
    // Clases CSS personalizadas
    class: 'card-custom tech-card'
};

// Método para actualizar el elemento card en el DOM
const updateCardElement = () => {
    const cardElement = document.getElementById('card-1');
    if (cardElement) {
        cardElement.custom = { ...cardCustom };
    }
};

// Funciones auxiliares para el card
export const cardHelpers = {
    // Cambiar orientación de la card
    changeOrientation: (orientation) => {
        const validOrientations = ['vertical', 'horizontal', 'horizontal-reverse'];
        if (!validOrientations.includes(orientation)) {
            console.log(`❌ Orientación inválida: ${orientation}. Opciones válidas:`, validOrientations);
            return;
        }
        
        console.log(`🔄 Cambiando orientación a: ${orientation}`);
        cardCustom.orientation = orientation;
        updateCardElement();
        console.log('✅ Orientación actualizada');
    },
    
    // Cambiar imagen de la card
    changeImage: (newImageSrc, alt = 'Nueva imagen') => {
        console.log('🖼️ Cambiando imagen de la card...');
        cardCustom.img.src = newImageSrc;
        cardCustom.img.alt = alt;
        updateCardElement();
        console.log(`✅ Imagen actualizada: ${alt}`);
    },
    
    // Actualizar contenido de la card
    updateContent: (title, subtitle, description) => {
        console.log('📝 Actualizando contenido de la card...');
        if (title) cardCustom.title = title;
        if (subtitle) cardCustom.subtitle = subtitle;
        if (description) cardCustom.description = description;
        updateCardElement();
        console.log('✅ Contenido actualizado');
    },
    
    // Agregar nuevo item al footer
    addFooterItem: (icon, text, clickHandler) => {
        console.log('➕ Agregando nuevo item al footer...');
        const newItem = {
            icon: icon || 'fas fa-plus',
            text: text || 'Nuevo item',
            libTbClick: clickHandler || ((e) => {
                console.log('Nuevo item clickeado:', e);
            })
        };
        
        cardCustom.boxItems.push(newItem);
        updateCardElement();
        console.log(`✅ Item agregado: ${text}`);
    },
    
    // Remover item del footer por índice
    removeFooterItem: (index) => {
        if (index < 0 || index >= cardCustom.boxItems.length) {
            console.log(`❌ Índice inválido: ${index}. Rango válido: 0-${cardCustom.boxItems.length - 1}`);
            return;
        }
        
        const removedItem = cardCustom.boxItems.splice(index, 1)[0];
        updateCardElement();
        console.log(`🗑️ Item removido: ${removedItem.text}`);
    },
    
    // Cambiar tag del header
    updateHeaderTag: (label, type = 'info', icon = null) => {
        console.log('🏷️ Actualizando tag del header...');
        cardCustom.tagHeader.label = label;
        cardCustom.tagHeader.type = type;
        if (icon) cardCustom.tagHeader.icon = icon;
        updateCardElement();
        console.log(`✅ Tag actualizado: ${label} (${type})`);
    },
    
    // Mostrar/ocultar header
    toggleHeader: () => {
        cardCustom.showHeader = !cardCustom.showHeader;
        updateCardElement();
        console.log(`🔄 Header ${cardCustom.showHeader ? 'mostrado' : 'ocultado'}`);
    },
    
    // Obtener información actual de la card
    getCardInfo: () => {
        const info = {
            orientation: cardCustom.orientation,
            title: cardCustom.title,
            subtitle: cardCustom.subtitle,
            description: cardCustom.description,
            footerItemsCount: cardCustom.boxItems.length,
            hasHeader: cardCustom.showHeader,
            tagLabel: cardCustom.tagHeader?.label,
            imageSrc: cardCustom.img?.src
        };
        
        console.log('📊 Información actual de la card:', info);
        return info;
    },
    
    // Simular diferentes estados de la card
    simulateStates: () => {
        console.log('🎭 Simulando diferentes estados de la card...');
        
        // Estado 1: Card de artículo técnico
        setTimeout(() => {
            console.log('📖 Estado 1: Artículo técnico');
            cardHelpers.updateContent(
                'Guía Completa de React Hooks',
                'Desarrollo Frontend Avanzado',
                'Domina los React Hooks con ejemplos prácticos y casos de uso reales. Desde useState hasta hooks personalizados.'
            );
            cardHelpers.updateHeaderTag('React', 'info', 'fab fa-react');
        }, 2000);
        
        // Estado 2: Card de tutorial
        setTimeout(() => {
            console.log('🎓 Estado 2: Tutorial');
            cardHelpers.updateContent(
                'Tutorial: API REST con Node.js',
                'Backend Development',
                'Aprende a crear APIs RESTful robustas y escalables usando Node.js, Express y MongoDB.'
            );
            cardHelpers.updateHeaderTag('Tutorial', 'success', 'fas fa-graduation-cap');
        }, 4000);
        
        // Estado 3: Card de noticia
        setTimeout(() => {
            console.log('📰 Estado 3: Noticia');
            cardHelpers.updateContent(
                'Nuevas Características de JavaScript 2024',
                'Noticias de Tecnología',
                'Descubre las últimas características añadidas a JavaScript y cómo pueden mejorar tu código.'
            );
            cardHelpers.updateHeaderTag('Noticia', 'warning', 'fas fa-newspaper');
        }, 6000);
        
        // Volver al estado original
        setTimeout(() => {
            console.log('🔄 Volviendo al estado original...');
            cardHelpers.updateContent(
                'Desarrollo de Software Moderno',
                'Tecnologías Frontend y Backend',
                'Explora las últimas tendencias en desarrollo de software, desde frameworks de JavaScript hasta arquitecturas de microservicios. Aprende las mejores prácticas para crear aplicaciones escalables y mantenibles.'
            );
            cardHelpers.updateHeaderTag('Tecnología', 'info', 'fas fa-code');
            console.log('✅ Estado original restaurado');
        }, 8000);
    }
};
