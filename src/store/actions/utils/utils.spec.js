import { createCardList } from '.'

describe('@createCardList', () => {
  it('creates a card list ready for the store', () => {
    const data = [
      {
        _id: '5db1ffc14e92f11f0b2d7951',
        pictures: 'animals',
        title: 'effw'
      },
      {
        _id: '5db1ffc14e92f11f0b2d7952',
        pictures: 'nature',
        title: 'effw'
      }
    ]
    const expected = {
      '5db1ffc14e92f11f0b2d7951': {
        _id: '5db1ffc14e92f11f0b2d7951',
        pictures: 'animals',
        title: 'effw'
      },
      '5db1ffc14e92f11f0b2d7952': {
        _id: '5db1ffc14e92f11f0b2d7952',
        pictures: 'nature',
        title: 'effw'
      }
    }
    const result = createCardList(data)

    expect(result).toEqual(expected)
  })
})
