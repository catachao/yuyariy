FROM public.ecr.aws/lambda/nodejs:20

# Copiar código
COPY . ${LAMBDA_TASK_ROOT}

# Instalar dependencias
RUN npm ci --omit=dev

# Comando de inicio
CMD [ "app.handler" ]
