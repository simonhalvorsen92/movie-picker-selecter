interface IMoviTitle {
  title: string;
}

const MovieListTitle = (props: IMoviTitle) => {
  return (
    <>
      <div>
        <h1>{props.title}</h1>
      </div>
    </>
  );
};

export default MovieListTitle;
