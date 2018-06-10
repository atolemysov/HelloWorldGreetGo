# HelloWorldGreetGo
1) Копировать .war файл который находится в папке target в папку webapps в Apache Tomcat;
2) Копировать содержимые в папке base в C:\Users\user
---Или же в webapps\HelloWorld-1.0-SNAPSHOT\WEB-INF\classes зайти в mybatis-config.xml и прописать в следующей строке путь к базе самостоятельно:
  <property name="url" value="jdbc:h2:file:[ПУТЬ]"/>
3) Запустить сервер и ввести в браузере http://localhost:8080/HelloWorld-1.0-SNAPSHOT;
4) Нажать ClickMe.
