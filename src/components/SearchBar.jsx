function Searchbar({ search, setSearch }) {
  return(
    <input
        type = "text"
        placeholder="Search News.."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
    />
  )
}

export default Searchbar;