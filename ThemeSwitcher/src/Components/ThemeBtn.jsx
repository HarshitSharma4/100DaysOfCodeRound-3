import useTheme from "../Contexts/ThemeProvider";
function ThemeBtn() {
  const theme = useTheme();
  const checkBtn = (e) => {
    const checkStatus = e.currentTarget.checked;
    if (checkStatus) {
      theme.darkTheme();
    } else {
      theme.lightTheme();
    }
  };
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer checkbox hidden"
        onChange={checkBtn}
        checked={theme.ThemeMode === "dark"}
      />
      {/* <div className="block border-[1px] dark:border-white border-gray-900 w-14 h-8 rounded-full dot absolute left-1 top-1 dark:bg-white bg-gray-800 transition"></div> */}

      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-800 dark:peer-focus:ring-gray-50 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px]  after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-600"></div>
    </label>
  );
}
export default ThemeBtn;
