import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <UpdatedAt />
      <DatabaseStatus />
    </>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let updatedAtText = "Carregando...";
  if (!isLoading && data) {
    updatedAtText = new Date(data?.updated_at).toLocaleString("pt-BR");
  }
  return (
    <>
      <h1>Status</h1>
      <ul>
        <li>Última atualização: {updatedAtText}</li>
      </ul>
    </>
  );
}

function DatabaseStatus() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });
  let DatabaseInfo = "Carregando...";

  if (!isLoading && data) {
    DatabaseInfo = (
      <>
        <h1>Database</h1>
        <ul>
          <li>Versão do PostgreSQL:{data.dependencies.database.version}</li>
          <li>
            Máximo de conexões: {data.dependencies.database.max_connections}
          </li>
          <li>
            Conexões abertas: {data.dependencies.database.opened_connections}
          </li>
        </ul>
      </>
    );
  }
  return DatabaseInfo;
}
