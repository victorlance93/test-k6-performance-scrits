# Testes de Carga com K6

Este repositório contém scripts de teste para realizar diferentes tipos de testes com o K6.

## Scripts Disponíveis

1. **Load Test (Carga)**

   - **Descrição:** Teste de carga básico para avaliar a capacidade do sistema sob carga.
   - **Como Executar:**
     ```
     cd scripts
     k6 run load-test.js
     ```

2. **Smoke Test (Fumaça)**

   - **Descrição:** Teste para verificar se as funcionalidades principais estão operacionais.
   - **Como Executar:**
     ```
     cd scripts
     k6 run smoke-test.js
     ```

3. **Soak Test (Durabilidade)**

   - **Descrição:** Teste de durabilidade para avaliar o comportamento do sistema sob carga prolongada.
   - **Como Executar:**
     ```
     cd scripts
     k6 run soak-test.js
     ```

4. **Spike Test (Pico de Carga)**

   - **Descrição:** Teste para avaliar a resposta do sistema a picos rápidos de carga.
   - **Como Executar:**
     ```
     cd scripts
     k6 run spike-test.js
     ```

5. **Stress Test (Estresse)**
   - **Descrição:** Teste para avaliar a capacidade do sistema sob estresse extremo.
   - **Como Executar:**
     ```
     cd scripts
     k6 run stress-test.js
     ```

## Teste de Estudo

- **Estudo Teste**
  - **Descrição:** Teste inicial para estudo e aprendizado com o K6.
  - **Como Executar:**
    ```
    k6 run study-test.js
    ```

## Relatórios

- Todos os scripts geram relatórios em HTML que podem ser encontrados na pasta `reports`.

Exemplo de uma captura de tela do relatório:

![Exemplo de Relatório HTML](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*m_7Xbd1rHfZH8q4B6w7tUA.png)

---

**Observação:** Certifique-se de instalar o K6 antes de executar os scripts. Consulte a [documentação oficial do K6](https://k6.io/docs/getting-started/installation) para obter instruções de instalação.
