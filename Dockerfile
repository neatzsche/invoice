FROM node:12.18.1
EXPOSE 3000
WORKDIR /app
COPY ["/src/invoice/package.json", "/src/invoice/package-lock.json*", "./"]
RUN npm install --save
RUN wget https://github.com/wkhtmltopdf/wkhtmltopdf/releases/download/0.12.3/wkhtmltox-0.12.3_linux-generic-amd64.tar.xz \
    && tar vxf wkhtmltox-0.12.3_linux-generic-amd64.tar.xz \
    && cp wkhtmltox/bin/wk* /usr/local/bin/
COPY ./src/invoice .
RUN chmod -R 555 /app
RUN useradd -ms /bin/bash admin
USER admin
CMD [ "sh", "start.sh" ]
