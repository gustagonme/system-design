// Answer State - Basado en ILibTbAnswerState interface
// Referencia: knowledge_base/tech_block_lib/molecules/answer_state/

// Answer State para página no encontrada (404)
export const answerStateCustom = {
    // Número de error
    number: '404',
    
    // Pictograma predefinido (si no se usa img)
    // pictograma: 'not-found', // 'not-found' | 'no-internet' | 'timeout' | 'in-construction'
    
    // Título del estado
    title: 'Página no encontrada',
    
    // Descripción del estado
    description: 'Lo sentimos, la página que buscas no existe o ha sido movida. Puedes regresar al inicio o explorar otras secciones de nuestro sitio.',
    
    // Imagen personalizada (en lugar de pictograma)
    img: {
        src: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'Ilustración de página no encontrada - Error 404',
        defaultWidth: 300,
        defaultHeight: 200
    },
    
    // Botón de acción (ILibTbButton)
    libTbButton: {
        label: 'Volver al Inicio',
        icon: 'fas fa-home',
        iconPosition: 'left',
        styleBtn: 'fill', // 'fill' | 'stroke' | 'text'
        typeBtn: 'primary', // 'primary' | 'secondary' | 'error' | 'warning' | 'success'
        size: 'large', // 'small' | 'medium' | 'large'
        class: 'answer-state-button',
        libTbClick: (e) => {
            console.log('Answer State - Botón clickeado:', e);
            console.log('🏠 Navegando al inicio...');
            
            // Simular navegación al inicio
            console.log('🔄 Redirigiendo a la página principal...');
            
            // En un entorno real, aquí se haría la navegación
            // router.navigate(['/']);
            // window.location.href = '/';
            
            setTimeout(() => {
                console.log('✅ Navegación completada');
                console.log('🎯 Usuario redirigido al inicio exitosamente');
                
                // Simular cambio de estado para mostrar diferentes ejemplos
                console.log('🎭 Cambiando a estado de "En construcción" en 3 segundos...');
                
                setTimeout(() => {
                    // Cambiar a estado "En construcción"
                    answerStateCustom.number = '';
                    answerStateCustom.title = 'Sección en construcción';
                    answerStateCustom.description = 'Estamos trabajando para mejorar esta sección. Pronto estará disponible con nuevas funcionalidades.';
                    answerStateCustom.img.src = 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
                    answerStateCustom.img.alt = 'Ilustración de construcción - Sección en desarrollo';
                    answerStateCustom.libTbButton.label = 'Notificarme';
                    answerStateCustom.libTbButton.icon = 'fas fa-bell';
                    answerStateCustom.libTbButton.typeBtn = 'warning';
                    
                    updateAnswerStateElement();
                    console.log('🚧 Estado cambiado a "En construcción"');
                    
                    // Volver al estado original después de 5 segundos
                    setTimeout(() => {
                        console.log('🔄 Volviendo al estado original...');
                        answerStateCustom.number = '404';
                        answerStateCustom.title = 'Página no encontrada';
                        answerStateCustom.description = 'Lo sentimos, la página que buscas no existe o ha sido movida. Puedes regresar al inicio o explorar otras secciones de nuestro sitio.';
                        answerStateCustom.img.src = 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
                        answerStateCustom.img.alt = 'Ilustración de página no encontrada - Error 404';
                        answerStateCustom.libTbButton.label = 'Volver al Inicio';
                        answerStateCustom.libTbButton.icon = 'fas fa-home';
                        answerStateCustom.libTbButton.typeBtn = 'primary';
                        
                        updateAnswerStateElement();
                        console.log('✅ Estado original restaurado');
                    }, 5000);
                    
                }, 3000);
                
            }, 1000);
        }
    },
    
    // Estilos personalizados
    style: {
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '40px 20px',
        textAlign: 'center',
        backgroundColor: '#f8f9fa',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
    },
    
    // Clases CSS personalizadas
    class: 'answer-state-custom error-404'
};

// Método para actualizar el elemento answer-state en el DOM
const updateAnswerStateElement = () => {
    const answerStateElement = document.getElementById('answer-state-1');
    if (answerStateElement) {
        answerStateElement.custom = { ...answerStateCustom };
    }
};

// Funciones auxiliares para el answer-state
export const answerStateHelpers = {
    // Cambiar a estado 404 (página no encontrada)
    show404: () => {
        console.log('🚫 Mostrando estado 404...');
        answerStateCustom.number = '404';
        answerStateCustom.title = 'Página no encontrada';
        answerStateCustom.description = 'Lo sentimos, la página que buscas no existe o ha sido movida. Puedes regresar al inicio o explorar otras secciones de nuestro sitio.';
        answerStateCustom.img.src = 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
        answerStateCustom.img.alt = 'Ilustración de página no encontrada - Error 404';
        answerStateCustom.libTbButton.label = 'Volver al Inicio';
        answerStateCustom.libTbButton.icon = 'fas fa-home';
        answerStateCustom.libTbButton.typeBtn = 'primary';
        updateAnswerStateElement();
        console.log('✅ Estado 404 mostrado');
    },
    
    // Cambiar a estado 500 (error del servidor)
    show500: () => {
        console.log('💥 Mostrando estado 500...');
        answerStateCustom.number = '500';
        answerStateCustom.title = 'Error interno del servidor';
        answerStateCustom.description = 'Algo salió mal en nuestros servidores. Nuestro equipo técnico ha sido notificado y está trabajando para solucionarlo.';
        answerStateCustom.img.src = 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
        answerStateCustom.img.alt = 'Ilustración de error del servidor - Error 500';
        answerStateCustom.libTbButton.label = 'Reintentar';
        answerStateCustom.libTbButton.icon = 'fas fa-redo';
        answerStateCustom.libTbButton.typeBtn = 'error';
        updateAnswerStateElement();
        console.log('✅ Estado 500 mostrado');
    },
    
    // Cambiar a estado sin conexión
    showNoInternet: () => {
        console.log('📡 Mostrando estado sin conexión...');
        answerStateCustom.number = '';
        answerStateCustom.title = 'Sin conexión a internet';
        answerStateCustom.description = 'Parece que no tienes conexión a internet. Verifica tu conexión y vuelve a intentarlo.';
        answerStateCustom.img.src = 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
        answerStateCustom.img.alt = 'Ilustración de sin conexión - Sin internet';
        answerStateCustom.libTbButton.label = 'Verificar Conexión';
        answerStateCustom.libTbButton.icon = 'fas fa-wifi';
        answerStateCustom.libTbButton.typeBtn = 'warning';
        updateAnswerStateElement();
        console.log('✅ Estado sin conexión mostrado');
    },
    
    // Cambiar a estado en construcción
    showInConstruction: () => {
        console.log('🚧 Mostrando estado en construcción...');
        answerStateCustom.number = '';
        answerStateCustom.title = 'Sección en construcción';
        answerStateCustom.description = 'Estamos trabajando para mejorar esta sección. Pronto estará disponible con nuevas funcionalidades.';
        answerStateCustom.img.src = 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
        answerStateCustom.img.alt = 'Ilustración de construcción - Sección en desarrollo';
        answerStateCustom.libTbButton.label = 'Notificarme';
        answerStateCustom.libTbButton.icon = 'fas fa-bell';
        answerStateCustom.libTbButton.typeBtn = 'warning';
        updateAnswerStateElement();
        console.log('✅ Estado en construcción mostrado');
    },
    
    // Cambiar a estado de timeout
    showTimeout: () => {
        console.log('⏱️ Mostrando estado timeout...');
        answerStateCustom.number = '408';
        answerStateCustom.title = 'Tiempo de espera agotado';
        answerStateCustom.description = 'La solicitud tardó demasiado tiempo en procesarse. Por favor, inténtalo de nuevo.';
        answerStateCustom.img.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
        answerStateCustom.img.alt = 'Ilustración de timeout - Tiempo agotado';
        answerStateCustom.libTbButton.label = 'Intentar de Nuevo';
        answerStateCustom.libTbButton.icon = 'fas fa-clock';
        answerStateCustom.libTbButton.typeBtn = 'secondary';
        updateAnswerStateElement();
        console.log('✅ Estado timeout mostrado');
    },
    
    // Cambiar a estado personalizado
    showCustomState: (number, title, description, imageSrc, buttonLabel, buttonIcon, buttonType) => {
        console.log('🎨 Mostrando estado personalizado...');
        answerStateCustom.number = number || '';
        answerStateCustom.title = title || 'Estado personalizado';
        answerStateCustom.description = description || 'Descripción personalizada del estado.';
        if (imageSrc) {
            answerStateCustom.img.src = imageSrc;
            answerStateCustom.img.alt = `Ilustración personalizada - ${title}`;
        }
        answerStateCustom.libTbButton.label = buttonLabel || 'Acción';
        answerStateCustom.libTbButton.icon = buttonIcon || 'fas fa-arrow-right';
        answerStateCustom.libTbButton.typeBtn = buttonType || 'primary';
        updateAnswerStateElement();
        console.log(`✅ Estado personalizado mostrado: ${title}`);
    },
    
    // Usar pictograma predefinido en lugar de imagen
    usePictogram: (pictogramType) => {
        const validPictograms = ['not-found', 'no-internet', 'timeout', 'in-construction'];
        if (!validPictograms.includes(pictogramType)) {
            console.log(`❌ Pictograma inválido: ${pictogramType}. Opciones válidas:`, validPictograms);
            return;
        }
        
        console.log(`🖼️ Cambiando a pictograma: ${pictogramType}`);
        
        // Remover imagen personalizada y usar pictograma
        delete answerStateCustom.img;
        answerStateCustom.pictograma = pictogramType;
        
        // Actualizar contenido según el pictograma
        switch (pictogramType) {
            case 'not-found':
                answerStateCustom.number = '404';
                answerStateCustom.title = 'Página no encontrada';
                answerStateCustom.description = 'La página que buscas no existe.';
                break;
            case 'no-internet':
                answerStateCustom.number = '';
                answerStateCustom.title = 'Sin conexión';
                answerStateCustom.description = 'Verifica tu conexión a internet.';
                break;
            case 'timeout':
                answerStateCustom.number = '408';
                answerStateCustom.title = 'Tiempo agotado';
                answerStateCustom.description = 'La solicitud tardó demasiado tiempo.';
                break;
            case 'in-construction':
                answerStateCustom.number = '';
                answerStateCustom.title = 'En construcción';
                answerStateCustom.description = 'Esta sección está en desarrollo.';
                break;
        }
        
        updateAnswerStateElement();
        console.log(`✅ Pictograma ${pictogramType} aplicado`);
    },
    
    // Volver a usar imagen personalizada
    useCustomImage: (imageSrc, alt) => {
        console.log('🖼️ Cambiando a imagen personalizada...');
        
        // Remover pictograma y usar imagen
        delete answerStateCustom.pictograma;
        answerStateCustom.img = {
            src: imageSrc || 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            alt: alt || 'Imagen personalizada',
            defaultWidth: 300,
            defaultHeight: 200
        };
        
        updateAnswerStateElement();
        console.log('✅ Imagen personalizada aplicada');
    },
    
    // Obtener información actual del estado
    getCurrentState: () => {
        const state = {
            number: answerStateCustom.number,
            title: answerStateCustom.title,
            description: answerStateCustom.description,
            hasImage: !!answerStateCustom.img,
            hasPictogram: !!answerStateCustom.pictograma,
            buttonLabel: answerStateCustom.libTbButton?.label,
            buttonType: answerStateCustom.libTbButton?.typeBtn
        };
        
        console.log('📊 Estado actual del answer-state:', state);
        return state;
    },
    
    // Demostración de diferentes estados
    demonstrateStates: () => {
        console.log('🎭 Iniciando demostración de estados...');
        
        const states = [
            () => answerStateHelpers.show404(),
            () => answerStateHelpers.show500(),
            () => answerStateHelpers.showNoInternet(),
            () => answerStateHelpers.showInConstruction(),
            () => answerStateHelpers.showTimeout()
        ];
        
        let currentIndex = 0;
        
        const showNextState = () => {
            if (currentIndex < states.length) {
                states[currentIndex]();
                currentIndex++;
                setTimeout(showNextState, 3000);
            } else {
                console.log('🔄 Volviendo al estado original...');
                answerStateHelpers.show404();
                console.log('✅ Demostración completada');
            }
        };
        
        setTimeout(showNextState, 2000);
    }
};
