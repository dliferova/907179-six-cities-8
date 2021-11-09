import {SortType} from '../../const';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {sortTypeChanged} from '../../store/actions';
import {getCurrentSortType} from '../../store/state/selector';

function Sort(): JSX.Element {
  const dispatch = useDispatch();

  const currentSortType = useSelector(getCurrentSortType);

  const onSortTypeChange = (sortType: SortType) => {
    dispatch(sortTypeChanged(sortType));
  };

  const [dropdownOpened, setDropdownOpened] = useState<boolean>(false);
  const sortTypes = Object.values(SortType);

  const onSortTypeClick = (sortType: SortType): void => {
    if (sortType !== currentSortType) {
      onSortTypeChange(sortType);
    }
    setDropdownOpened(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setDropdownOpened(!dropdownOpened)}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${dropdownOpened
        ? 'places__options--opened'
        : 'places__options--closed'}`}
      >
        {sortTypes.map((sortType) => (
          <li
            key={sortType}
            className={`places__option ${sortType === currentSortType
              ? 'places__option--active'
              : ''}`}
            onClick={() => onSortTypeClick(sortType)}
            tabIndex={0}
          >{sortType}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sort;
