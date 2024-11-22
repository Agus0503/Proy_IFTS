FROM python:3.10-slim

# Instalar dependencias del sistema necesarias para compilar paquetes
RUN apt-get update && apt-get install -y \
    build-essential \
    libmysqlclient-dev \
    && rm -rf /var/lib/apt/lists/*

# Crear un directorio para la aplicación
WORKDIR /app

# Copiar los archivos necesarios
COPY . /app/

# Crear un entorno virtual
RUN python -m venv /opt/venv
RUN /opt/venv/bin/pip install --upgrade pip

# Instalar las dependencias
RUN /opt/venv/bin/pip install -r requirements.txt

# Establecer las variables de entorno
ENV PATH="/opt/venv/bin:$PATH"

# Comando para iniciar la aplicación
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]