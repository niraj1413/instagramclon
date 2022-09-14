/* Fell free to visit my youtube channel for more updates,
https://www.youtube.com/channel/UCtVM2RthR4aC6o7dzySmExA
*/

/*


Full-page view:

https://codepen.io/GeorgePark/full/VXrwOP/

*/

 const posts = document.querySelectorAll('.gallery-item');

posts.forEach(post => {
	post.addEventListener('click', () => {
 		//Get original image URL
	const imgUrl = post.firstElementChild.src.split("?")[0];
	//Open image in new tab
	window.open(imgUrl, '_blank');
	});
 });

