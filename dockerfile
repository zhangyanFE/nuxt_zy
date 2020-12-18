FROM node:12.16.2
# MAINTAINER osv.qianpailive.cn
# ENV HOST 0.0.0.0
RUN mkdir -p /webroot/Devastator
COPY . /webroot/Devastator
WORKDIR /webroot/Devastator
# EXPOSE 3002
# ENV IDC beijing
# ENV IN_DOCKER 1
# RUN npm cache clean -f
# RUN rm -rf node_modules
RUN npm install
RUN npm run build
CMD ["npm", "run", "prod"]