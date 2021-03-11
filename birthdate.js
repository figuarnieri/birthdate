const birthdate = (date) => {
  const birthdateDate = new Date(date);
  const birthdateYear = birthdateDate.getFullYear();
  const birthdateMonth = birthdateDate.getMonth() + 1;
  const birthdateDay = birthdateDate.getDate();
  const todayDate = new Date();
  const todayYear = todayDate.getFullYear();
  const todayMonth = todayDate.getMonth() + 1;
  const todayDay = todayDate.getDate();

  const resultYear = (todayYear - birthdateYear)
    .toString()
    .padStart(4, 0);
  const resultMonth = todayMonth - birthdateMonth;
  const resultDay = todayDay - birthdateDay;
  const resultDate = new Date(resultYear, resultMonth, resultDay, 24);
  const resultAge = resultDate.getFullYear() - 1900;
  return resultAge;
};