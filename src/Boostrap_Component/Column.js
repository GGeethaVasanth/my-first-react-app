import React from 'react'

const Column = () => {
  const columnstyle ={
    backgroundColor: "grey",
    color: "black",
    lineHeight: 2,
    textAlign: 'justify',
    
  }

  const columnstyle1 ={
    backgroundColor: "blue",
    color: "black",
    lineHeight: 2,
    
    
  }
    
  return (
    
    <div class="container">
  <div class="row">
    <div class="col-12"><div style={columnstyle}>{"\t"}Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque error libero doloremque incidunt officia, asperiores exercitationem cupiditate ullam eligendi tempore id ipsa rerum earum, modi quia cumque placeat, repudiandae quidem? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores quas quidem, inventore quos tempore commodi labore? Aspernatur, consectetur facere esse quasi placeat saepe velit reiciendis tempore, aliquam voluptate quaerat sequi?</div></div>
    <div class="col-12"><div style={columnstyle1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque error libero doloremque incidunt officia, asperiores exercitationem cupiditate ullam eligendi tempore id ipsa rerum earum, modi quia cumque placeat, repudiandae quidem? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores quas quidem, inventore quos tempore commodi labore? Aspernatur, consectetur facere esse quasi placeat saepe velit reiciendis tempore, aliquam voluptate quaerat sequi?</div></div>
    {/* <div class="col-4">.col-4<br/>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
    <div class="col-6">.col-6<br/>Subsequent columns continue along the new line.</div> */}
  </div>
</div>
  )
}

export default Column