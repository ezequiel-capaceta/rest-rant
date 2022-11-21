const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
    )
    if (data.place.comments.length) {
      let sumRatings = data.place.comments.reduce((tot, c) => {
        return tot + c.stars
      }, 0)
      let averageRating = sumRatings / data.place.comments.length
      rating = (
        <h3>
          {averageRating} stars
        </h3>
      ) 
          <h4> Rating; {c.stars} <h4/>
    }}
return (
        <Def>
          <main>
            <div className='container'>
              <div class="row">
                <div class="col-sm-6 mt-3">          
                  <img src={data.place.pic} alt={data.place.name} />
                </div>
                <p>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines} </p>
                <div class="col-sm-6 mt-3">
                  <h1>{data.place.name}</h1>
                  <h2>
                    Rating
                  </h2>
                  {rating}
                  <br />
                  <p>Not Rated</p>
                  <h2>Description</h2>
                  <h3>
                    {data.place.showEstablished()}
                  </h3>
                  <h4>
                    Serving {data.place.cuisines}
                  </h4>
                  <div className="btn-container pt-3">
                    <div className='d-flex flex-column'>
                      <div className='col pb-2'>
                        <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
                          Edit
                        </a> 
                      </div>
                      <div className='col'>     
                        <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                          <button type="submit" className="btn btn-danger">
                            Delete
                          </button>
                        </form>
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
            <hr/>
            <footer>
              <h2>Comments</h2>
              {comments}
              <br/>
            </footer>
          </main>
        </Def>
    )
    

module.exports = show
