// File Upload Field - Basado en ILibTbFileUploadField interface
// Referencia: knowledge_base/tech_block_lib/organisms/file_upload_field/

// File Upload Field completo con drag & drop, validaciones y múltiples archivos
export const fileUploadFieldCustom = {
    // Identificador para testing
    dataQaId: 'file-upload-documentos',
    
    // Configuración de archivos
    multiple: true, // Permitir múltiples archivos
    length: 5, // Máximo 5 archivos
    maxSize: 2000000, // 2MB máximo por archivo (en bytes)
    
    // Tipos de archivo permitidos
    avaibleTypes: [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/gif',
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'text/plain'
    ],
    
    // Textos de la interfaz
    label: 'Subir Documentos',
    dragDropLabel: 'Arrastra tus archivos aquí o haz clic para seleccionar',
    dragDropIcon: 'fas fa-cloud-upload-alt',
    caption: 'Formatos permitidos: JPG, PNG, PDF, DOC, XLS, TXT. Tamaño máximo: 2MB por archivo.',
    
    // Títulos de error personalizados
    errorTitleLength: 'Demasiados archivos',
    errorTitleType: 'Tipo de archivo no válido',
    errorTitleMaxSize: 'Archivo demasiado grande',
    
    // Mensajes de error detallados
    errorText: {
        length: `No puedes subir más de 5 archivos. Por favor, selecciona máximo 5 archivos.`,
        type: 'El tipo de archivo seleccionado no está permitido. Solo se aceptan: JPG, PNG, PDF, DOC, XLS, TXT.',
        maxSize: 'El archivo es demasiado grande. El tamaño máximo permitido es 2MB.',
        isFileSelected: 'Este archivo ya ha sido seleccionado. No se pueden subir archivos duplicados.'
    },
    
    // Configuración del botón de selección (ILibTbButton)
    customBtn: {
        label: 'Seleccionar Archivos',
        icon: 'fas fa-folder-open',
        iconPosition: 'left',
        styleBtn: 'stroke', // 'fill' | 'stroke' | 'text'
        typeBtn: 'primary', // 'primary' | 'secondary' | 'error' | 'warning' | 'success'
        size: 'medium', // 'small' | 'medium' | 'large'
        class: 'file-upload-select-button',
        libTbClick: (e) => {
            console.log('File Upload - Botón seleccionar clickeado:', e);
            console.log('📁 Abriendo selector de archivos...');
            // El componente maneja automáticamente la apertura del selector
        }
    },
    
    // Configuración de alertas (ILibTbAlert)
    customAlert: {
        position: 'top-right', // Posición de las alertas de error
        life: 5000, // Duración de la alerta en ms
        closable: true, // Permitir cerrar manualmente
        class: 'file-upload-alert'
    },
    
    // Configuración de mensajes de alerta (ILibTbAlertMessage)
    customAlertMessage: {
        showIcon: true, // Mostrar icono en el mensaje
        showClose: true, // Mostrar botón de cerrar
        class: 'file-upload-alert-message'
    },
    
    // Configuración por defecto para archivos subidos (ILibTbUploadingFile)
    customUploadingFile: {
        // Iconos para diferentes estados
        iconCaption: {
            uploadingIcon: 'fas fa-spinner fa-spin', // Icono mientras sube
            successIcon: 'fas fa-check-circle', // Icono de éxito
            uploadedIcon: 'fas fa-file-alt', // Icono de archivo subido
            errorIcon: 'fas fa-exclamation-triangle' // Icono de error
        },
        
        // Iconos miniatura para el progreso
        minIconCaption: {
            uploadingMinIcon: 'fas fa-upload',
            uploadedMinIcon: 'fas fa-check',
            successMinIcon: 'fas fa-thumbs-up',
            errorMinIcon: 'fas fa-times'
        },
        
        // Textos para diferentes estados
        textCaption: {
            uploading: 'Subiendo archivo...',
            uploaded: 'Archivo subido correctamente',
            error: 'Error al subir el archivo'
        },
        
        // Configuración de botones de acción
        libTbReloadBtn: {
            icon: 'fas fa-redo',
            styleBtn: 'text',
            typeBtn: 'secondary',
            size: 'small',
            class: 'file-reload-button',
            libTbClick: (uploadingFile) => {
                console.log('File Upload - Botón reload clickeado:', uploadingFile);
                console.log('🔄 Reintentando subida del archivo...');
                // Lógica para reintentar la subida
                simulateFileUpload(uploadingFile);
            }
        },
        
        libTbCancelBtn: {
            icon: 'fas fa-times',
            styleBtn: 'text',
            typeBtn: 'error',
            size: 'small',
            class: 'file-cancel-button',
            libTbClick: (uploadingFile) => {
                console.log('File Upload - Botón cancel clickeado:', uploadingFile);
                console.log('❌ Cancelando subida del archivo...');
                // El componente maneja automáticamente la cancelación
            }
        },
        
        libTbDeleteBtn: {
            icon: 'fas fa-trash',
            styleBtn: 'text',
            typeBtn: 'error',
            size: 'small',
            class: 'file-delete-button',
            libTbClick: (uploadingFile) => {
                console.log('File Upload - Botón delete clickeado:', uploadingFile);
                console.log('🗑️ Eliminando archivo...');
                // El componente maneja automáticamente la eliminación
            }
        }
    },
    
    // Array de archivos seleccionados (se llena dinámicamente)
    selectedFiles: [],
    
    // Estilos personalizados
    style: {
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        border: '2px dashed #ddd',
        borderRadius: '8px',
        backgroundColor: '#fafafa',
        transition: 'all 0.3s ease'
    },
    
    // Clases CSS personalizadas
    class: 'file-upload-field-custom',
    
    // Eventos del drag and drop
    libTbOnDragEnter: (event) => {
        console.log('File Upload - Drag enter:', event);
        console.log('📥 Archivo arrastrado sobre la zona de drop');
        
        // Cambiar estilos visuales para indicar zona activa
        fileUploadFieldCustom.style.borderColor = '#007bff';
        fileUploadFieldCustom.style.backgroundColor = '#e3f2fd';
        updateFileUploadFieldElement();
    },
    
    libTbOnDragLeave: (event) => {
        console.log('File Upload - Drag leave:', event);
        console.log('📤 Archivo salió de la zona de drop');
        
        // Restaurar estilos originales
        fileUploadFieldCustom.style.borderColor = '#ddd';
        fileUploadFieldCustom.style.backgroundColor = '#fafafa';
        updateFileUploadFieldElement();
    },
    
    libTbOnDrop: (event) => {
        console.log('File Upload - Drop:', event);
        console.log('📁 Archivos soltados en la zona de drop');
        
        // Restaurar estilos después del drop
        fileUploadFieldCustom.style.borderColor = '#ddd';
        fileUploadFieldCustom.style.backgroundColor = '#fafafa';
        updateFileUploadFieldElement();
    },
    
    // Evento principal cuando se agregan archivos
    libTbOnCatchFile: (files) => {
        console.log('File Upload - Archivos capturados:', files);
        console.log(`📋 ${files.length} archivo(s) seleccionado(s):`);
        
        files.forEach((file, index) => {
            console.log(`   ${index + 1}. ${file.name} (${formatFileSize(file.size)}) - ${file.type}`);
            
            // Simular proceso de subida para cada archivo
            setTimeout(() => {
                simulateFileUpload(file);
            }, index * 500); // Escalonar las subidas
        });
        
        // Actualizar contador de archivos
        const totalFiles = fileUploadFieldCustom.selectedFiles.length + files.length;
        console.log(`📊 Total de archivos: ${totalFiles}/${fileUploadFieldCustom.length}`);
        
        if (totalFiles >= fileUploadFieldCustom.length) {
            console.log('⚠️ Límite de archivos alcanzado');
        }
    },
    
    // Evento cuando se cancela un archivo
    libTbOnCancelFile: (file) => {
        console.log('File Upload - Archivo cancelado:', file);
        console.log(`❌ Cancelada la subida de: ${file.name}`);
        
        // Remover archivo de la lista
        fileUploadFieldCustom.selectedFiles = fileUploadFieldCustom.selectedFiles.filter(
            selectedFile => selectedFile.file.name !== file.name
        );
        
        updateFileUploadFieldElement();
        console.log(`📊 Archivos restantes: ${fileUploadFieldCustom.selectedFiles.length}`);
    },
    
    // Evento cuando se elimina un archivo
    libTbOnDeleteFile: (file) => {
        console.log('File Upload - Archivo eliminado:', file);
        console.log(`🗑️ Eliminado: ${file.name}`);
        
        // Remover archivo de la lista
        fileUploadFieldCustom.selectedFiles = fileUploadFieldCustom.selectedFiles.filter(
            selectedFile => selectedFile.file.name !== file.name
        );
        
        updateFileUploadFieldElement();
        console.log(`📊 Archivos restantes: ${fileUploadFieldCustom.selectedFiles.length}`);
    },
    
    // Evento cuando se reintenta subir un archivo
    libTbOnReloadFile: (uploadingFile) => {
        console.log('File Upload - Archivo reintentado:', uploadingFile);
        console.log(`🔄 Reintentando subida de: ${uploadingFile.fileName}`);
        
        // Reiniciar el progreso y simular nueva subida
        uploadingFile.progress = 0;
        uploadingFile.haveError = false;
        
        updateFileUploadFieldElement();
        
        // Simular nueva subida
        setTimeout(() => {
            simulateFileUpload(uploadingFile.file);
        }, 500);
    }
};

// Método para actualizar el elemento file-upload-field en el DOM
const updateFileUploadFieldElement = () => {
    const fileUploadElement = document.getElementById('file-upload-field-1');
    if (fileUploadElement) {
        fileUploadElement.custom = { ...fileUploadFieldCustom };
    }
};

// Función auxiliar para formatear el tamaño de archivo
const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// Función para simular la subida de archivos
const simulateFileUpload = (file) => {
    console.log(`🚀 Iniciando subida simulada de: ${file.name}`);
    
    // Crear objeto de archivo en subida
    const uploadingFile = {
        fileName: file.name,
        size: file.size,
        progress: 0,
        haveError: false,
        file: file,
        ...fileUploadFieldCustom.customUploadingFile
    };
    
    // Agregar a la lista si no existe
    const existingIndex = fileUploadFieldCustom.selectedFiles.findIndex(
        f => f.file.name === file.name
    );
    
    if (existingIndex === -1) {
        fileUploadFieldCustom.selectedFiles.push(uploadingFile);
    } else {
        fileUploadFieldCustom.selectedFiles[existingIndex] = uploadingFile;
    }
    
    updateFileUploadFieldElement();
    
    // Simular progreso de subida
    const uploadInterval = setInterval(() => {
        uploadingFile.progress += Math.random() * 20;
        
        if (uploadingFile.progress >= 100) {
            uploadingFile.progress = 100;
            clearInterval(uploadInterval);
            
            // Simular éxito o error (90% éxito, 10% error)
            const isSuccess = Math.random() > 0.1;
            
            if (isSuccess) {
                console.log(`✅ Subida completada: ${file.name}`);
                uploadingFile.textCaption.current = uploadingFile.textCaption.uploaded;
            } else {
                console.log(`❌ Error en la subida: ${file.name}`);
                uploadingFile.haveError = true;
                uploadingFile.textCaption.current = uploadingFile.textCaption.error;
            }
            
            updateFileUploadFieldElement();
        } else {
            updateFileUploadFieldElement();
        }
    }, 200);
};

// Funciones auxiliares para el file-upload-field
export const fileUploadFieldHelpers = {
    // Limpiar todos los archivos
    clearAllFiles: () => {
        console.log('🧹 Limpiando todos los archivos...');
        fileUploadFieldCustom.selectedFiles = [];
        updateFileUploadFieldElement();
        console.log('✅ Todos los archivos eliminados');
    },
    
    // Obtener información de archivos
    getFilesInfo: () => {
        const info = {
            totalFiles: fileUploadFieldCustom.selectedFiles.length,
            maxFiles: fileUploadFieldCustom.length,
            totalSize: fileUploadFieldCustom.selectedFiles.reduce((sum, file) => sum + file.size, 0),
            maxSizePerFile: fileUploadFieldCustom.maxSize,
            allowedTypes: fileUploadFieldCustom.avaibleTypes,
            files: fileUploadFieldCustom.selectedFiles.map(file => ({
                name: file.fileName,
                size: formatFileSize(file.size),
                progress: file.progress,
                hasError: file.haveError
            }))
        };
        
        console.log('📊 Información de archivos:', info);
        return info;
    },
    
    // Cambiar configuración de tipos permitidos
    setAllowedTypes: (types) => {
        console.log('🔧 Cambiando tipos permitidos:', types);
        fileUploadFieldCustom.avaibleTypes = types;
        updateFileUploadFieldElement();
        console.log('✅ Tipos permitidos actualizados');
    },
    
    // Cambiar tamaño máximo
    setMaxSize: (maxSizeInMB) => {
        const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
        console.log(`📏 Cambiando tamaño máximo a: ${maxSizeInMB}MB (${maxSizeInBytes} bytes)`);
        fileUploadFieldCustom.maxSize = maxSizeInBytes;
        fileUploadFieldCustom.errorText.maxSize = `El archivo es demasiado grande. El tamaño máximo permitido es ${maxSizeInMB}MB.`;
        updateFileUploadFieldElement();
        console.log('✅ Tamaño máximo actualizado');
    },
    
    // Cambiar límite de archivos
    setMaxFiles: (maxFiles) => {
        console.log(`📋 Cambiando límite de archivos a: ${maxFiles}`);
        fileUploadFieldCustom.length = maxFiles;
        fileUploadFieldCustom.errorText.length = `No puedes subir más de ${maxFiles} archivos. Por favor, selecciona máximo ${maxFiles} archivos.`;
        updateFileUploadFieldElement();
        console.log('✅ Límite de archivos actualizado');
    },
    
    // Habilitar/deshabilitar múltiples archivos
    setMultiple: (multiple) => {
        console.log(`🔄 ${multiple ? 'Habilitando' : 'Deshabilitando'} múltiples archivos`);
        fileUploadFieldCustom.multiple = multiple;
        if (!multiple && fileUploadFieldCustom.selectedFiles.length > 1) {
            // Mantener solo el primer archivo si se deshabilita múltiple
            fileUploadFieldCustom.selectedFiles = fileUploadFieldCustom.selectedFiles.slice(0, 1);
        }
        updateFileUploadFieldElement();
        console.log(`✅ Múltiples archivos ${multiple ? 'habilitado' : 'deshabilitado'}`);
    },
    
    // Simular subida de archivos de prueba
    addTestFiles: () => {
        console.log('🧪 Agregando archivos de prueba...');
        
        const testFiles = [
            { name: 'documento.pdf', size: 1500000, type: 'application/pdf' },
            { name: 'imagen.jpg', size: 800000, type: 'image/jpeg' },
            { name: 'hoja-calculo.xlsx', size: 600000, type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }
        ];
        
        testFiles.forEach((fileData, index) => {
            // Crear objeto File simulado
            const file = new File([''], fileData.name, { type: fileData.type });
            Object.defineProperty(file, 'size', { value: fileData.size });
            
            setTimeout(() => {
                console.log(`📁 Agregando archivo de prueba: ${fileData.name}`);
                simulateFileUpload(file);
            }, index * 1000);
        });
        
        console.log('✅ Archivos de prueba agregados');
    },
    
    // Obtener estadísticas de subida
    getUploadStats: () => {
        const files = fileUploadFieldCustom.selectedFiles;
        const stats = {
            total: files.length,
            completed: files.filter(f => f.progress === 100 && !f.haveError).length,
            inProgress: files.filter(f => f.progress > 0 && f.progress < 100).length,
            errors: files.filter(f => f.haveError).length,
            pending: files.filter(f => f.progress === 0).length,
            totalSize: formatFileSize(files.reduce((sum, f) => sum + f.size, 0)),
            averageProgress: files.length > 0 ? Math.round(files.reduce((sum, f) => sum + f.progress, 0) / files.length) : 0
        };
        
        console.log('📈 Estadísticas de subida:', stats);
        return stats;
    },
    
    // Reintentar archivos con error
    retryFailedUploads: () => {
        const failedFiles = fileUploadFieldCustom.selectedFiles.filter(f => f.haveError);
        
        if (failedFiles.length === 0) {
            console.log('✅ No hay archivos con error para reintentar');
            return;
        }
        
        console.log(`🔄 Reintentando ${failedFiles.length} archivo(s) con error...`);
        
        failedFiles.forEach((uploadingFile, index) => {
            setTimeout(() => {
                fileUploadFieldCustom.libTbOnReloadFile(uploadingFile);
            }, index * 500);
        });
    },
    
    // Configurar para solo imágenes
    configureForImages: () => {
        console.log('🖼️ Configurando para solo imágenes...');
        fileUploadFieldHelpers.setAllowedTypes(['image/jpeg', 'image/jpg', 'image/png', 'image/gif']);
        fileUploadFieldCustom.dragDropLabel = 'Arrastra tus imágenes aquí o haz clic para seleccionar';
        fileUploadFieldCustom.caption = 'Solo imágenes: JPG, PNG, GIF. Tamaño máximo: 2MB por imagen.';
        fileUploadFieldCustom.errorText.type = 'Solo se permiten archivos de imagen (JPG, PNG, GIF).';
        updateFileUploadFieldElement();
        console.log('✅ Configurado para solo imágenes');
    },
    
    // Configurar para documentos
    configureForDocuments: () => {
        console.log('📄 Configurando para solo documentos...');
        fileUploadFieldHelpers.setAllowedTypes([
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'text/plain'
        ]);
        fileUploadFieldCustom.dragDropLabel = 'Arrastra tus documentos aquí o haz clic para seleccionar';
        fileUploadFieldCustom.caption = 'Solo documentos: PDF, DOC, XLS, TXT. Tamaño máximo: 2MB por documento.';
        fileUploadFieldCustom.errorText.type = 'Solo se permiten documentos (PDF, DOC, XLS, TXT).';
        updateFileUploadFieldElement();
        console.log('✅ Configurado para solo documentos');
    }
};
