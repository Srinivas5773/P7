# OmniHealth OS - Production Multi-Stage Container Image
FROM node:20-alpine AS base

WORKDIR /app

# Install production dependencies
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Copy application source code
COPY . .

# Expose HTTP web port
EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000

# Health check probe
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/api/health || exit 1

# Start server entry point
CMD ["node", "server.js"]
