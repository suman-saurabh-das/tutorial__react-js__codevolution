import React from 'react'

const heading = {
  color: "dodgerBlue",
  fontSize: "72px",
}

function InlineStyles() {
  return (
    <div>
      <h2 style={heading}>Inline Styles</h2>
      <h2 className='error'>Error Message</h2>
      {/* <h2 className={styles.success}>Yay ! Success</h2> */}
    </div>
  )
}

export default InlineStyles

/*
    In react, inline styles are not specified as a string, instead they are specified within an object whose key & value are the camelCase version of the style name and the value is usually a string in camelCase.

    NOTE - In case of Regular style sheets, CSS can be applied to every child component, which might lead to conflicts. But when using CSS modules, the classes are locally scoped by default and cannot be accessed by other components.
*/
