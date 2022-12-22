interface ISearchMovie {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}
const SearchBox = (props: ISearchMovie) => {
  return (
    <>
      <div>
        <input
          type="text"
          value={props.searchValue}
          onChange={(event) => props.setSearchValue(event.target.value)}
        ></input>
      </div>
    </>
  );
};

export default SearchBox;
