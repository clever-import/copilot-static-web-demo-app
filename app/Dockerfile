FROM node:18-slim

# Create app directory and set ownership
WORKDIR /usr/src/app

# Create a non-root user
RUN groupadd -r nodeapp && \
    useradd -r -g nodeapp -s /bin/false nodeapp && \
    chown -R nodeapp:nodeapp /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production && \
    npm cache clean --force

# Switch to non-root user
USER nodeapp

# Bundle app source
COPY --chown=nodeapp:nodeapp . .

# Set environment variables
ENV NODE_ENV=production \
    PORT=3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
    CMD curl -f http://localhost:3000/ || exit 1

# Expose port
EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]