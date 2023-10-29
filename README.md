## Angular

Instale o NodeJs: https://nodejs.org/en

Depois execute os comandos para verificar e instalar o Angular CLI

```
node -v
npm install @angular/cli
ng version
```

## Spring

1. Instale o Java JDK 17: https://download.oracle.com/java/17/archive/jdk-17.0.9_windows-x64_bin.exe

Configure as Variaveis de Ambiente - Java

```
JAVA_HOME 
C:\Program Files\Java\jdk-17

Path
%JAVA_HOME%\bin
```

2. Baixe o Maven: https://dlcdn.apache.org/maven/maven-3/3.9.5/binaries/apache-maven-3.9.5-bin.zip

descompactar no C:\

Configure as Variaveis de Ambiente - Maven

```
M2_HOME
C:\apache-maven-3.9.4

Path
%M2_HOME%\bin

# Ve se foi instalado
cmd
mvn
```

## Extenções VSCODE
```
Angular Extension Pack
Java + Spring Extension Pack
Spring Boot Extension Pack
Spring Boot Tools
Thunder Cliente
```

## Execute o Back - Spring

Abre o diretorio tcc-spring no VSCODE e  depois no Spring Boot Tools clique em Run 

Estara executando as requicições do MySQL na localhost:8080/api/cliente

## Execute o Front - Angular

Abre o diretorio tcc-angular no VSCODE e execute os comandos no terminal

```
# Instala os Packages (caso necessario)
npm install


# Inicializa a Apicação
npm run start
```

O Front estara executando na localgost:4200








