export function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}



export const reviews = [
  {
    id: guid(),
    stars: 4,
    text: 'Curabitur ut mauris est. Donec diam massa, maximus non mi et, condimentum ullamcorper odio. Donec suscipit, tellus a scelerisque sollicitudin, augue justo tempor dui, eu molestie urna risus vitae ante. Pellentesque lacinia ligula at diam feugiat, quis ultrices ipsum mollis. Vivamus sed cursus nisl, ac finibus lorem. Pellentesque tincidunt urna sit amet nibh elementum, sit amet vulputate risus eleifend. Etiam dapibus ornare molestie. In nibh ligula, porta sed dolor posuere, efficitur fermentum lacus. Nunc in enim massa. Mauris pharetra sed diam in lobortis.',
    createdAt: '11/17/2018',
    user: {
      name: 'Oran Ashton',
      avatar: 'profile1.png'
    }
  },
  {
    id: guid(),
    stars: 5,
    text: 'Nulla facilisi. Donec at nisl id diam dignissim feugiat at eget turpis. Proin volutpat non dolor ut bibendum. Quisque at lorem elementum, ultricies libero eget, finibus ante.',
    createdAt: '11/13/2018',
    user: {
      name: 'Gilbert Dillon'
    }
  },
  {
    id: guid(),
    stars: 4,
    text: 'Cras facilisis mollis lectus eu dapibus. Mauris vel luctus orci. Vivamus malesuada accumsan odio vel facilisis. Maecenas vitae semper diam, vel suscipit purus. Ut a libero at ante egestas tristique. Sed suscipit sollicitudin dolor, ac pretium massa malesuada quis.',
    createdAt: '10/01/2018',
    user: {
      name: 'Erika Garrett'
    }
  },
  {
    id: guid(),
    stars: 5,
    text: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc dignissim justo eu magna maximus volutpat. Donec condimentum lectus eget imperdiet ullamcorper. Vivamus iaculis magna non facilisis semper. Etiam dictum arcu ac nulla luctus tincidunt. Phasellus dui leo, vestibulum feugiat congue vitae, consequat semper sapien. Vestibulum ultrices, sem et aliquet mollis, dui dui blandit leo, nec tempus turpis ex ac urna. Nunc eget porttitor ante. Curabitur ut mauris est. Donec diam massa, maximus non mi et, condimentum ullamcorper odio. Donec suscipit, tellus a scelerisque sollicitudin, augue justo tempor dui, eu molestie urna risus vitae ante.',
    createdAt: '07/28/2018',
    user: {
      name: 'Joseph Campuzano'
    }
  },
  {
    id: guid(),
    stars: 3,
    text: 'Nullam in odio lectus. Cras non ante molestie, finibus metus eu, fringilla justo. Donec blandit vehicula ex, et vulputate mauris. Curabitur id nisl molestie, placerat tortor nec, viverra velit. In ut placerat lacus. Proin vel magna ultricies, sagittis sem quis, semper justo. Sed at felis porttitor, semper ligula ac, vestibulum quam. Pellentesque eleifend a libero eu consectetur. Nulla facilisi. Vivamus imperdiet ac elit sed tristique. Nunc iaculis purus ligula, a mollis mauris blandit quis. Nunc malesuada dui libero, at condimentum leo sagittis a. Mauris mollis mauris vitae hendrerit fringilla. Vivamus feugiat enim sit amet leo vulputate, efficitur ultricies lacus pulvinar. Curabitur vestibulum non leo in placerat. Sed a egestas erat.',
    createdAt: '07/26/2018',
    user: {
      name: 'Riley Estrada',
      avatar: 'profile3.png'
    }
  },
  {
    id: guid(),
    stars: 1,
    text: 'Donec diam massa, maximus non mi et, condimentum ullamcorper odio. Donec suscipit, tellus a scelerisque sollicitudin, augue justo tempor dui, eu molestie urna risus vitae ante. Pellentesque lacinia ligula at diam feugiat, quis ultrices ipsum mollis. Vivamus sed cursus nisl, ac finibus lorem.',
    createdAt: '06/06/2018',
    user: {
      name: 'Nella Meyers'
    }
  },
  {
    id: guid(),
    stars: 5,
    text: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc dignissim justo eu magna maximus volutpat. Donec condimentum lectus eget imperdiet ullamcorper. Vivamus iaculis magna non facilisis semper. Etiam dictum arcu ac nulla luctus tincidunt. Phasellus dui leo, vestibulum feugiat congue vitae, consequat semper sapien. Vestibulum ultrices, sem et aliquet mollis, dui dui blandit leo, nec tempus turpis ex ac urna. Nunc eget porttitor ante. Curabitur ut mauris est. Donec diam massa, maximus non mi et, condimentum ullamcorper odio. Donec suscipit, tellus a scelerisque sollicitudin, augue justo tempor dui, eu molestie urna risus vitae ante.',
    createdAt: '06/01/2018',
    user: {
      name: 'Ayva Davenport'
    }
  },
  {
    id: guid(),
    stars: 5,
    text: 'Nullam in odio lectus. Cras non ante molestie, finibus metus eu, fringilla justo. Donec blandit vehicula ex, et vulputate mauris. Curabitur id nisl molestie, placerat tortor nec, viverra velit. In ut placerat lacus. Proin vel magna ultricies, sagittis sem quis, semper justo. Sed at felis porttitor, semper ligula ac, vestibulum quam. Pellentesque eleifend a libero eu consectetur. Nulla facilisi. Vivamus imperdiet ac elit sed tristique. Nunc iaculis purus ligula, a mollis mauris blandit quis. Nunc malesuada dui libero, at condimentum leo sagittis a. Mauris mollis mauris vitae hendrerit fringilla. Vivamus feugiat enim sit amet leo vulputate, efficitur ultricies lacus pulvinar. Curabitur vestibulum non leo in placerat. Sed a egestas erat.',
    createdAt: '05/25/2018',
    user: {
      name: 'Axel Talbot',
      avatar: 'profile2.png'
    }
  },
  {
    id: guid(),
    stars: 1,
    text: 'Donec diam massa, maximus non mi et, condimentum ullamcorper odio. Donec suscipit, tellus a scelerisque sollicitudin, augue justo tempor dui, eu molestie urna risus vitae ante. Pellentesque lacinia ligula at diam feugiat, quis ultrices ipsum mollis. Vivamus sed cursus nisl, ac finibus lorem.',
    createdAt: '1/11/2018',
    user: {
      name: 'Rohit Appleton'
    }
  },
];