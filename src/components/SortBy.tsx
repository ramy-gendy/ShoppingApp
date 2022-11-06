export default function SortByComponent(props: any) {
  return (
    <>
      <div className="">
        <input
          type="radio"
          value={props.value}
          name="sortBy"
          className="hover:text-orange-400 active:text-orange-400 mr-4 mt-4"
          onChange={(e) => props.onChange(e)}
        ></input>
        <label>{props.label}</label>
      </div>
    </>
  );
}
