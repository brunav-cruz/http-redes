import os
import socket
import mimetypes
import subprocess

# Caminho base do build
build_dir = '/Users/brunacruz/Desktop/http-redes/http-codes/dist'

# Inicia a API Node.js como um subprocesso
node_process = subprocess.Popen(['node', '/Users/brunacruz/Desktop/http-redes/http-codes-api/server.js'])
print("API Node.js iniciada...")

# Lê o arquivo index.html do build do Vite
with open(os.path.join(build_dir, 'index.html'), 'r') as h:
    homepage = h.read()

# Configura o socket TCP
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind(('', 8080))  # Bind to all interfaces
s.listen(5)

print("Servidor React rodando na porta 8080...")

try:
    while True:
        ws, addr = s.accept()
        data = ws.recv(2000)
        
        # Parseia o request HTTP
        P = data.split(b' ')
        
        if P[0] == b'GET':
            # Se o caminho for "/", serve o index.html
            if P[1] == b'/':
                resp = ('HTTP/1.1 200 OK\r\n' +
                        'Content-Type: text/html\r\n' +
                        'Content-Length: ' + str(len(homepage)) + '\r\n\r\n' + 
                        homepage)
                ws.sendall(resp.encode())
            else:
                # Serve arquivos estáticos do build (incluindo subdiretórios como 'assets')
                filepath = P[1][1:].decode()  # Remove o "/"
                full_path = os.path.join(build_dir, filepath)
                
                # Verifica se o arquivo existe
                if os.path.exists(full_path):
                    with open(full_path, 'rb') as f:
                        file_content = f.read()
                        content_type, _ = mimetypes.guess_type(full_path)
                        
                        # Default content type
                        if not content_type:
                            content_type = 'application/octet-stream'
                        
                        # Constrói a resposta HTTP
                        response = ('HTTP/1.1 200 OK\r\n' +
                                    'Content-Type: ' + content_type + '\r\n' +
                                    'Content-Length: ' + str(len(file_content)) + '\r\n\r\n')
                        
                        # Envia o cabeçalho HTTP e o conteúdo do arquivo
                        ws.sendall(response.encode())
                        ws.sendall(file_content)
                else:
                    # Retorna 404 se o arquivo não for encontrado
                    ws.sendall(b'HTTP/1.1 404 Not Found\r\n\r\n')
except KeyboardInterrupt:
    print("Servidor terminado pelo usuário")
finally:
    # Fecha o subprocesso da API Node.js quando o servidor React for encerrado
    node_process.terminate()
    node_process.wait()
    print("API Node.js encerrada.")
    
    # Verifica se 'ws' foi definido antes de fechar
    if 'ws' in locals():
        ws.close()
    
    # Fecha o socket do servidor TCP
    s.close()
