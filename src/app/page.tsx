import CheckSupabaseConnection from '../../components/CheckSupabaseConnection';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the GIZ ASP MIS v1</h1>
      <p>This is the home page of our application.</p>
      <CheckSupabaseConnection />
    </div>
  );
};

export default HomePage;