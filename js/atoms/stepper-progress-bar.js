// Stepper Progress Bar - Basado en ILibTbStepperProgressBar interface
// Referencia: Interface proporcionada por el usuario

// Stepper Progress Bar (como el ejemplo de la documentación proporcionada)
export const stepperProgressBarCustom = {
    dataQaId: 'stepper-progress-bar-proceso',
    activeIndex: 1, // Item actualmente activo (0-based, item 2 activo)
    readonly: false, // Permitir interacción
    showCounter: true, // Mostrar contador (actual/total)
    style: {
        width: '100%',
        margin: '20px 0',
        padding: '15px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
    },
    class: 'stepper-progress-bar-custom',
    
    // Items del stepper progress bar (ILibTbStepperProgressBarItem[])
    items: [
        {
            // Item 1 - Completado
            id: 1,
            dataQaId: 'step-inicio',
            disabled: false,
            visible: true,
            style: {
                // Estilos específicos para este item si es necesario
            },
            class: 'step-completed',
            tabindex: '0',
            // Propiedades adicionales personalizadas
            title: 'Inicio',
            description: 'Proceso iniciado correctamente',
            icon: 'fas fa-play-circle',
            libTbClick: (e) => {
                console.log('Click en Item 1 - Inicio:', e);
                console.log('Navegando al paso inicial del proceso');
                
                // Actualizar el índice activo
                stepperProgressBarCustom.activeIndex = 0;
                
                // Lógica específica del item
                console.log('📝 Mostrando información inicial del proceso');
                console.log('Estado: Completado ✅');
            }
        },
        {
            // Item 2 - Activo actualmente
            id: 2,
            dataQaId: 'step-progreso',
            disabled: false,
            visible: true,
            routerLink: '/progreso', // Navegación interna (ejemplo)
            class: 'step-active',
            tabindex: '0',
            // Propiedades adicionales personalizadas
            title: 'En Progreso',
            description: 'Procesando información',
            icon: 'fas fa-spinner',
            libTbClick: (e) => {
                console.log('Click en Item 2 - En Progreso:', e);
                console.log('Item activo - mostrando progreso actual');
                
                // Actualizar el índice activo
                stepperProgressBarCustom.activeIndex = 1;
                
                // Lógica específica del item
                console.log('⏳ Mostrando progreso del proceso actual');
                console.log('Estado: En progreso 🔄');
            }
        },
        {
            // Item 3 - Deshabilitado
            id: 3,
            dataQaId: 'step-revision',
            disabled: true, // Deshabilitado
            visible: true,
            class: 'step-disabled',
            tabindex: '-1',
            // Propiedades adicionales personalizadas
            title: 'Revisión',
            description: 'Pendiente de revisión',
            icon: 'fas fa-search',
            libTbClick: (e) => {
                console.log('Click en Item 3 - Revisión (deshabilitado):', e);
                console.log('⚠️ Este paso está deshabilitado');
                
                // No actualizar índice activo porque está deshabilitado
                console.log('🚫 No se puede acceder a este paso aún');
            }
        },
        {
            // Item 4 - Link externo
            id: 4,
            dataQaId: 'step-documentacion',
            disabled: false,
            visible: true,
            url: 'https://www.google.com', // Link externo
            target: '_blank', // Abrir en nueva pestaña
            class: 'step-external',
            tabindex: '0',
            // Propiedades adicionales personalizadas
            title: 'Documentación',
            description: 'Ver documentación externa',
            icon: 'fas fa-external-link-alt',
            libTbClick: (e) => {
                console.log('Click en Item 4 - Documentación (link externo):', e);
                console.log('🔗 Abriendo documentación externa en nueva pestaña');
                
                // Actualizar el índice activo
                stepperProgressBarCustom.activeIndex = 3;
                
                // Lógica específica del item
                console.log('📚 Redirigiendo a documentación externa');
                console.log('URL:', e.item?.url);
            }
        },
        {
            // Item 5 - Pendiente
            id: 5,
            dataQaId: 'step-finalizacion',
            disabled: false,
            visible: true,
            class: 'step-pending',
            tabindex: '0',
            // Navegación con parámetros
            routerLink: '/finalizar',
            queryParams: { proceso: 'completo', version: '1.0' },
            queryParamsHandling: 'merge',
            fragment: 'resultado',
            preserveFragment: true,
            // Propiedades adicionales personalizadas
            title: 'Finalización',
            description: 'Completar proceso',
            icon: 'fas fa-check-circle',
            libTbClick: (e) => {
                console.log('Click en Item 5 - Finalización:', e);
                console.log('Navegando al paso final del proceso');
                
                // Actualizar el índice activo
                stepperProgressBarCustom.activeIndex = 4;
                
                // Lógica específica del item
                console.log('🏁 Iniciando finalización del proceso');
                console.log('Parámetros:', e.item?.queryParams);
                console.log('Estado: Pendiente ⏳');
            }
        }
    ],
    
    // Evento cuando el índice activo cambia
    libTbActiveIndexChange: (e) => {
        console.log('Stepper Progress Bar - Cambio de índice activo:', e);
        console.log(`Nuevo índice activo: ${e.index}`);
        console.log(`Item activo:`, e.item);
        
        // Actualizar el modelo
        stepperProgressBarCustom.activeIndex = e.index;
        
        // Obtener información del item actual
        const currentItem = stepperProgressBarCustom.items[e.index];
        if (currentItem) {
            console.log(`📋 Item actual: ${currentItem.title || currentItem.id}`);
            console.log(`📝 Descripción: ${currentItem.description || 'Sin descripción'}`);
            console.log(`🎨 Icono: ${currentItem.icon || 'Sin icono'}`);
        }
        
        // Calcular progreso
        const totalItems = stepperProgressBarCustom.items.length;
        const currentPosition = e.index + 1;
        const progress = (currentPosition / totalItems) * 100;
        
        console.log(`📊 Progreso: ${currentPosition}/${totalItems} (${progress.toFixed(1)}%)`);
        
        // Lógica adicional basada en el índice
        switch (e.index) {
            case 0:
                console.log('🚀 En el paso inicial - Proceso comenzado');
                break;
            case 1:
                console.log('⏳ En progreso - Procesando datos');
                break;
            case 2:
                console.log('🔍 En revisión - Validando información');
                break;
            case 3:
                console.log('📚 Consultando documentación externa');
                break;
            case 4:
                console.log('🏁 En finalización - Completando proceso');
                break;
            default:
                console.log('📍 Posición no reconocida');
        }
        
        // Mostrar información del contador si está habilitado
        if (stepperProgressBarCustom.showCounter) {
            console.log(`🔢 Contador mostrado: ${currentPosition}/${totalItems}`);
        }
        
        // Verificar si el item tiene URL externa
        if (currentItem?.url) {
            console.log(`🔗 Item con URL externa: ${currentItem.url}`);
            console.log(`🎯 Target: ${currentItem.target || '_self'}`);
        }
        
        // Verificar si el item tiene routerLink
        if (currentItem?.routerLink) {
            console.log(`🧭 Item con navegación interna: ${currentItem.routerLink}`);
            if (currentItem.queryParams) {
                console.log(`📄 Con parámetros:`, currentItem.queryParams);
            }
            if (currentItem.fragment) {
                console.log(`🔗 Con fragmento: #${currentItem.fragment}`);
            }
        }
    }
};
