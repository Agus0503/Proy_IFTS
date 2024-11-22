FROM python:3.10-slim

# Instalar dependencias necesarias para mysqlclient
RUN apt-get update && apt-get install -y \
    build-essential \
    libmariadb-dev \
    pkg-config \
    && rm -rf /var/lib/apt/lists/*

# Crear el directorio de trabajo
WORKDIR /app

# Copiar los archivos de requisitos
COPY requirements.txt .

# Instalar las dependencias de Python
RUN pip install --no-cache-dir -r requirements.txt
# Crear un entorno virtual
RUN python -m venv /opt/venv

# Instalar las dependencias
RUN /opt/venv/bin/pip install -r requirements.txt

# Establecer las variables de entorno
ENV PATH="/opt/venv/bin:$PATH"

# Copiar el código de la aplicación
COPY . /app/

# Ejecutar collectstatic después de copiar los archivos de la app
RUN python manage.py collectstatic --noinput

# Comando para ejecutar el servidor
CMD ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8000"]
