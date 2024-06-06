import './SearchForm.css'

export default function SearchForm(){
    return(
    <form action="" id="search-form">
        <input type="search" placeholder="search here..." name="search-box" id="search-box" />
        <label for="search-box" className="fas fa-search"></label>
        <i class="fas fa-times" id="close"></i>
     </form>
    )
}