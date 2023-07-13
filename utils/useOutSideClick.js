function useOutsideClick(element, callback) {
    document.addEventListener("click", function (event) {
      const target = event.target;
      const isElement = target === element || element.contains(target);
  
      if (!isElement) {
        callback();
      }
    });
  }

  export default useOutsideClick