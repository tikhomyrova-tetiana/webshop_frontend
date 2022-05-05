export default function CategoryFilter({
  categoryId,
  categoryTitle,
  changeFilters,
}) {
  return (
    <div>
      <input
        type="checkbox"
        id={categoryId}
        value={categoryId}
        onChange={changeFilters}
      />
      <label htmlFor={`${categoryId}`}>{categoryTitle}</label>
      <br />
      <br />
    </div>
  );
}
