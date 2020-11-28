export default function Home() {
  return (
    <div>
      <h1>API de dias úteis</h1>
      <h3>Calcular o próximo dia útil:</h3>
      <code>https://diasuteis.dev/api/proximo?data=2020-11-28</code>
      <pre>{`{"proximoDiaUtil":"2020-11-30"}`}</pre>
    </div>
  );
}
