FROM node:alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь код приложения
COPY . .

# Указываем порт, который будет использоваться приложением
EXPOSE 8000

# Команда для запуска бэкенда
CMD ["npm", "start"]
