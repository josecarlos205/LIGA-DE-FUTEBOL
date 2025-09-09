const fetch = require('node-fetch');

const BASE_URL = 'http://localhost:3001';

async function testSaveAndLoadChampionship() {
  const testData = {
    teams: [{ id: 'T1', name: 'Time Teste' }],
    players: [{ id: 'P1', name: 'Jogador Teste', jerseyNumber: 10, position: 'Atacante', teamId: 'T1' }],
    matches: [],
    events: []
  };

  // Test save endpoint
  const saveResponse = await fetch(`${BASE_URL}/save-championship`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: testData })
  });
  const saveResult = await saveResponse.json();
  if (!saveResponse.ok || !saveResult.success) {
    console.error('Falha ao salvar dados:', saveResult);
    return false;
  }
  console.log('Dados salvos com sucesso.');

  // Test load endpoint
  const loadResponse = await fetch(`${BASE_URL}/load-championship`);
  if (!loadResponse.ok) {
    console.error('Falha ao carregar dados:', await loadResponse.text());
    return false;
  }
  const loadedData = await loadResponse.json();

  // Verify loaded data matches saved data
  if (JSON.stringify(loadedData) !== JSON.stringify(testData)) {
    console.error('Dados carregados não correspondem aos dados salvos.');
    return false;
  }
  console.log('Dados carregados correspondem aos dados salvos.');

  return true;
}

(async () => {
  const result = await testSaveAndLoadChampionship();
  if (result) {
    console.log('Teste de integração Firebase passou com sucesso.');
  } else {
    console.error('Teste de integração Firebase falhou.');
    process.exit(1);
  }
})();
