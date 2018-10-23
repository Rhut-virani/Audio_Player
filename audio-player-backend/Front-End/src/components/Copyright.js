import React from 'react';

export default class Copyright extends React.Component {
    render() {
        return (
        <div className="copyright">
            <button type="button" className="btn footer-button" data-toggle="modal" data-target="#exampleModalCenter">
              <i class="far fa-copyright"></i>Legally Downloaded Content Click to Know More
            </button>
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Copyright Info</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div className="text-center">
                      <h5 className="mt-3">The Songs dont represent the Choice of the developer by any means. And developer does not take any responsibility for the songs.</h5>
                      <h5 className="mt-3"> They are here because they were the only one available for free which developer could find.</h5>
                      <h5 className="mt-3"> And Developers Are Lazy ;)</h5>
                      <h5 className="mt-3"> Listeners Discretion Advised</h5>
    
                      <h5> Follow This Links to find source of the songs.</h5>
    
                    </div>
                    <ul className="text-truncate">
                      <li>https://www.hive.co/downloads/download/459997/spotlight/
                      </li>
                      <li>https://www.toneden.io/martingarrix/post/poison
                      </li>
                      <li>https://soundcloud.com/m-we-1/mowe-birds-flying-high
                      </li>
                      <li>http://cf-media.sndcdn.com/oe8Bb8D9u4hd?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vb2U4QmI4RDl1NGhkIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTI2NzUzNDI4fX19XX0_&Signature=am6P3lQTZrhb6cXx8s887kljDC8oclBgg-qFyFXj-woTR7YY570uKyDXe~Yjw-s0cPjTmkZPIZrer7SriaycHWTt09bOe5-azHQttUA~8IFEedh3h5SIDgvabDQmopKjmJROB4NcQ8gL-7qyB8olX7zUZgKC6Ni-eu1EJ-NSugWGYB8RtwwW~nTsiun7GIUTM9-AV8QqqltrIcG6Y0MmnyMGOpchy8~DFzIbWE91lVigRINKvMvDyFBy3Ptl-UtBmwqwCo1TOJ9Zbd~q4Os1IXbF0wc6BeWxWw~e0ymoKRO6l-HU0UkFGpLBD5SKYRnnQq2OfsV0rw8YGIbrTHswcA__&Key-Pair-Id=APKAJAGZ7VMH2PFPW6UQ
                      </li>
                      <li>https://d2tml28x3t0b85.cloudfront.net/tracks/original_files/000/214/230/original/Infinity%20%28Dubdogz%20&%20Bhaskar%20Remake%29.mp3?
                      </li>
                      <li>https://io.toneden.io/3a299e0e-7999-4b0f-a6be-650b319459f5</li>
                    </ul>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

