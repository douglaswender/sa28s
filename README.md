# SA28S

## Atenção!
Todo o código foi feito para ser utilizado no ambiente Linux (Ubuntu 16).

## Instalação

Rodar os comandos a seguir: 
```bash
sudo apt update
sudo apt install curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
source ~/.bashrc
nvm --version
nvm install --lts
npm -v
node -v
sudo apt install git
sudo apt install git
git clone https://github.com/douglaswender/sa28s.git
cd sa28s
chmod 777 run.sh
./run.sh
```

A partir deste momento o comando "cesar" e "decifra" já deve estar funcionando! Já existe um arquivo text.txt no diretório do arquivo, pode usar para a funcionalidade. Utilize o nano para escolher a frase que deseja encriptografar

#### Criptografar: 
```
cesar <arquivo txt> -c -k <chave>
```

#### Decifrar (utilizando o algoritmo de César): 
```
cesar <arquivo txt> -d -k <chave>
```

### Ambiente testado:

npm versão utilizada: v6.14.13

node versão utilizada: v14.17.3

## Mais informações:
[Notion](https://www.notion.so/Como-rodar-o-script-no-Ubuntu-16-0709f7e5b94d40569de76b15727acc29)