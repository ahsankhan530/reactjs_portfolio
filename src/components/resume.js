import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl';
import Education from './education'
import Experience from './experience'
import Skills from './skills'
export default class resume extends Component {
    render() {
        return (
            <div>
               <Grid>
                   <Cell col={4}>
                   <div style={{textAlign:"center"}}>
                   <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhAQEBAWEBAVECAbEBUVDRsQEA4WIB0iIiAdHx8kKDQsJCYxJx8fLTItMT03MDAwIys1QD9ANzQ5MDcBCgoKDg0OGxAQGi0mICUtLS0tLS0tKy0tLS0rLS0tLS0tLSstLSstKy0rLS0tLS0tLS04LTgtLS0tLS04LS0tLf/AABEIAMgAyAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EAEAQAAEDAgQEBAMFBgMJAQAAAAEAAhEDIQQSMUEFIlFhBhMycYGRoRRCUrHBI2Jy0eHwM6LxByQ0Q3OCkpPCY//EABoBAAMBAQEBAAAAAAAAAAAAAAECAwQABQb/xAAmEQACAgICAgICAgMAAAAAAAAAAQIRAyESMRNBBFEiMmGhcZGx/9oADAMBAAIRAxEAPwDGcKa1tGgGiP2QO9ybk3PUqDg/+JiP+ohcNj3UqdHMzlLGgEOvoEVwk/ta42LlNrsrEvKTte2inaN1GwN0n3UoKkyyJAdUezQeyBwzNj7ozzBptCUdD6dcNcHaxoi6GIpue6q5xsLXi0XQAog6FRuwxC0Y884UmtFY5HEm4txIhkkANjkAN3ALGmrSqtcYMl1r2buR9forHjjHvcRmAyN/ZCeqo8HmDjy5Wn1xpPZDI3Jt/wBksuRth1SMrgYuNjJjogXPJgHQCAI0CKqZfu3M3MfRVnEqhpNA++6/8IWfHTdIyze6QaaslpqOmGS6/paNB+S7icbhszAx9soznbMdfks5Bdcn6rlSlAuYPTdaPGqFNDj+LUpDQ4Oa2dNHXRHDeOUg/ncObX9zoFkgxItKHhjxoNGyw2Ka4uqCC4Dl5/WJ0TcXNR1PL6Gvzer0Otp0NljspF0XhcbUZEOkDQFL4WlopytUa12IyOh27ZnuSE9rmnzJkQJCqHYwVmkuhpDY/d90RUrgB75hrmy38T4H9FHwSduhknWzuJDXxTc7LBa4mJ1kBCmmHgtsQ115GqJ8kHCDE5f2lR0OOawANrfBG4jCUGsZ5dQuqmC6ByIclFLX8EuaaSopDgmOdTGRjcrSHcg5z1NlJSw9GINNhMSP2YkoqrRhszDidejdyovs8uLmu0ZDbRl7rS3ya56H4g9XBUS1k02gZuaBlOvZJT4dvmGmHkBpu5xHq6JIRjx02Xx4k1uhYLBuqUqOYjIGNMAXNgpeF2r4gRvorLKG2EAAWAEAdkBw0D7RiJ7JmzMkXVIRcalTZSBB1nVQYRzi8yAGgfEowgmCdJUmWQ2mwzc7KduGLrSRbZIN0RGHs6dLQEirkrKxX2BeUad85aI3SrYh5ZUcx+YtZI0VRxPFvqucASQ2wG1t0uHhzfT94WtM9Qj5VF0+hOSuiqfReGirU++Z5vvIrDAupsBEAC3YEyjOMYWtVY3lHK7QCCQoMVSyUmGQS5s2RzN8VXTJ5IuD/gFeSx2SQ7MLEXnt7rPY4ZnkxFtCVpm0YYA2246ys9igMxAuZuT1XYKslaIYI00GiY4ZnXOgVtgOFOqAXV1hPCocZcT8FeWSKHjhkzItpzouvoEfKVvaXhGmPvEje2qPHh+kGlobIj4qTzr0UXx2eYeXpKaGjTdbXG+G2gkiQOiocdwvJJCpHNF6OeCSRXUKmWRrLYCsMI3zyQ4xDIbl6IDDi5PZXXB6ZLDljNNjH0XfIyyjCkwLoJrjJhKdNpzQ/wDO8opmHa1zWuqAvkSJso+H0TVpEAFzgZgXOpH6qwxPBK7A976ZAa0EkiLGwKyqT/X2CONqqKbiGMJLXubDXF7WgCxggBPe9ocA03yCx9rrjcpNPzHNa2k+RmaSwAm8gKbg1SlicViLBzSyzoyiBAsNgt2fHDJDyXpLr30PNpbbLLgmBpfZg6oAbOPzNvkkjCxtKk5kwwNMnp7D4ri81Snk/L16M0fJLa6KpjR1J+CD4e0faa4H4Rr8FYj3sqzC/wDFVoP3R+i2fY5e0ZDpOkRboinxr3UOFjU9JRGT+cKbKo6XCbJlXHsZ6jca2UuW6oOMVBIsRJ5iTqozdPQZSaRBDHVHlhIzXh1pGqK4ZjamHrU6gAcGnM0EcqqDOdsy0Ea9B1RuCJdGc8jWxKpkf4J10S5PRa8c467FuL2gUnipDg1mQQQfms/SxDqjW0yADTs4/ihWNeoCCwen80FRaKQcwN5nmBHMG9LqcZPJB666Gm+e/oJEOYTMEiGfvnoFl8RSIeZGh07rS0+VzbGWekdFQ8UnPmjUm/Uqvx9EV2a3w+0FrfZa3CUgIWB4HjRSY0uOt1rMFxiiQCXgdpQnFt6PRhNKKsvXsEKNrQu0cTTqCWuB9jKjxWLpUxL3ge5SUNyVWDY+m1ZfiVMBrzGysOIcfo6MdJ6Krq4sVGVJEHIVfBhc50zozT6MnQyjzZaXHJyx90khaPw9TmmxwEFoJd3vZZ5r+Vwj1PF+wlazAsbQHlzLg0T1upfNdJxMbrQe2gMOapa6CKYcwgxBzAylxni9TFhrqry4xllCYquHOrEiAKeUGd5EoXDMGWpmPKwTbVY4xlSt7H5+kB4jBAtq03P5iZAHreO3ZQ+FeG1WlzpNMG0tu6JWhbwaliaRx9Grm8ohvlvbArTcj6lO4ViWtqEMmWgQAP2dJulupX0mL46XGLaf3/ou4wa/L1/ZNWe+kScoLMk8/Oew90lHxdmdjqY5uWSXWbPdJM8UF1/QkZqOooBpOsRCr8JP2uqOtMJcPZXcxji8SRfNLnOPc9VzBNIxTg6J8u5G4XmmSy/pTMk6ad0SAZ/RCU3F1hoEU0nUdFNlF0O8zY/FC4zhTa7pzWsI6Cbqfy3SO/0UrMMTILj7pVXJFI7KfxLwmnQeypT/AMMUxmGbNDkFhgSQHAAawfZaargGeW/zHFzQ0mCYCy+I2m+b8kflK3aVWSy1F2RV3OfIjLLgMoN4m6sG0aVKjkcS1xjKQDqDMFOwgGcAiSTYAczWpVwKjzcwNAs6yuD10JGSRG3AmftBqAS+GgHUHVA8YwjnthjCcrpkC3eEbQp5mZhJl3MCZHSyv+FUwWANglrTmvoqRlx2WxwU3RmOG4XMwOLcwDLN6lWFPh5e6iGNpCmRNWKXPSvfXWym4Iw3EaOIPwK1GHwwjS26ZzaZo8aaKXCUm0bU2xmm0RPdR4hgquIe2YFgdCVY1gDVyt2CipNAqQRqUlvsfgqKetgqjKkteG0C2f8ACGbNGkR17obFsJonky1Da282W0rYdsaLPcQZLmAb1Gj6rTgytSBGFGQx3DqmH8uo+HAP20noicNjWSahJc5zrnf3Wg8YNY5gogyXVJafgqHhPB4AL9T6QdFGWaFNz7IZYJdBlJ5yusHRTmDcaoDEY13MKbQTUdFxGUbR00VqyiWuIiczS0XgNsdUM+iyiQHMl0jKRUmBH6dUcKuPK+iUItbvok4fSIbF2j8M6HqiMM/yzlZYJsQA/wC6G83VD1a5aCR6j10Ys6y5OTcWHm0yJ+MqVHODzEOj3SUdEgmoCbxLfeElqead7JvJsK4eTlE3MKCkT9rNv+Up+H+gKAH/AHsd6Sf2AvcKwAGBBLpRQI69kNTqxHVSsKRooghjbzrCe85QXHQBNphA8ee/yXZdJ5vZSl2UukU+IxNWs4lzi1pFhPKB3UVZ0ZXM1aLki3uu46SOXlYwS6/qJTadYmgWFt8wzECbFJk5NJszN29huHqZIOfM9zdQIhQ4iuGkNEnl5o9RnSEcMK0uhpDQG5pdo0Af0QVFjHvMCDkkxr7rPj3sZw+yXB0TToODrFol3X/VReGzUpOc0ggOMjqPdSYmnIIIcGkzBsHFTYCkH5nSS3KIAdzSDcfRbvixeRuHtlcD/KkE8MJbWrsOoqz87rT/AGltNkuIA7lYetXNDFuJ9DwPpZG8bw1XEvpBp/ZCnNjuulHezQpvjrsMocdoUqxGYOJ/VRO43RqVS0ODSDuhqHBKIOY0i524LkPiuBsk5WFrp0zaJlQX5as2QxTXMlpB9jKz+OINWm0kCCXXdEwP6ofgeEqYZ1YVDyZQWmbKi4xmrVC+DlB5fYKkeMMcpM7m+PRZPYa2LpNbdovbSNSrDjDcmSLc6Ow+FhrXeklg0EEWCFxlN7yQCCQQSNwIXiSn5cv+CU92S8N4bUxDs1NpcDZ4j0iNVWcWwwEZhfT4q+8N8Zdg8wZBA5ag/FCyzcU+rGYSS/MCfwnULRjhJ9emTbXGjuDrQyu1xsBACDqEyBMkNvO53RVSmHOggAmDb5XQr4DiCZMx/JbYQhuu2SYzENaHGDreUlPiaQ8vNIlsgjLBHdJX4IUI4ezkBiZKDq4hgxWYuAaGQT0KL4W/kAO2ndB1qLDimtIGVzZd3KHs5ltgawf6TIG4VowgKvwtJrCcogI1hJBMJGUiFMM3HxTalLO17SJBG6VIuBEWU9Zhk2gR13U6tlDA4+q5xfy5eaCBpZE4XFOZmIy62BuCOikoMzVnN0dMxGpRFbDhzBTaJLX/ALTuV05pRqRnrYPh8Q4vIcDJ2HXT5XRNOgGEC4Ny4xqOgSwuFLAcxlzXWvoOinwDXPa4OGXNIaTpeVmnKPoqtqiGpUzQIJIEuJOxsE+niKlM08psTcdbKAuexzmuEjY2nsEx4qNqio5oDA2ZBs1aYJqSeN6Fdp6JeLsbWc4Cz2DM0k2d7KXw7xYB5pVeUiwnZB4Zwqvc5vobF59Rn8gj+McG8wCoy1Rrf/NaMrjpP6LKTe4hfiPi/kBhpua4nXeyfwTFuqMNWqWtH3RosLWa8etrge4RFOpVqcrQTPQWGyRwVCLNLkaHinE/MqeVTMyI7StDwziGCoUHUa9HzKhEBwMEd5VDwPgvlA1H3qEfBoQXHHESfwkR9Us+OSPjRdS4xtmhx3GG0zVsXN0pNn2VVwqnXNR1QEUy58uvNuip/tgquynlJdyGdFosIXMAB2bYjdefPH4k1HtkJSuX8E9A0gQxzZOszv1PuqHiVLynNaCRLjkOw6hWLQXOJBuSA0dUNxl76lWkyoQ3I6Ty3cYiPorfHW/yEm29A2EzA5hcl1idu6hxDw0kuguzSNs0fyRtMXc02I2HTqhOJyBSa4aVbHqN5VYZKnoW9AtYFzHkkyWT8UkVXqMDalTQHlaISWqEm7Gj0E8NIyNUGKH+9UY/CpeF3YFFigRiaPsUq7FfReUrmPmimAaKKiVPTj6pGPERpEkXMwpqeGMEuNjp7pA8wIRVKrJEwUi3KisUA0adNlRpyDlgTuCZus7QqloquJMl8GPfdaTjeMpUmPqOuTZvvsvPK/Eqjg5o5WudLgNyq5cEpOkQypKRqa9VrWl0gAm0nWyranGabAA2XnLoNAVnTJiSTGklcCWHwor9nZJSaZZ1+M1HTADR7SfmgMRi3vsXkjoXWUT3LtKnJE2C0xxxj0jrNh4bwk0H2uWk/HZXuArCoxrti2VXcAcW06Ya0vcW2aBe8/LQ7/BScGpkNqMNi2pLbzym/wCcqPyY2rL4JboJZRgmyd9muB3RRboiKdOLrG2bFQO5sCNlnPENNpol25dI9vn/AHKv+I6Npg81R0ezd/5fFUfi90MaBpNgLfRaPjQ9mb5E/SMa1yu8J4hIAbUbNozbxCpC35JkLTPDGfZn5Ua7DYxj3BzHAkCQD1XeIUnE5/XLW33Bk3+ayLXFpkGCrfC8fIAbUE2iQb7/AM1mlhnBfiMpJljVq/esHtBzAHaEFjahqwPvMZJ2Ext9VDxTHsLCaXrNja6J4dXNQNe6BygG139V0cdR51sdRSRSYzFueadOIY0/+ROpSWoxjKZBDgCQyR1HdJPj+Qq6FlRU4KmC1xLy0NENAMcyfhHvL8OX3NwD1UnDiA28dU6tVmpSfs3VM3sWtGhpPgDqiqZHX2VOMUAZ7KfCPLgL+6myiLkaSuMNxHVQ0WTZPp0jOim/2RWJR+MrCkyZlxJ/v4rKimtF4veBUp045g0lx99PyVCV6UejNm/cjLFE9iJKaUaJA4YVI1IqfA0s1Sm3q8D5lDo49N4VghSY0CJLRm94/v5Sgq3BHnNleSdWnOA5u5HedVfCwB2/s/1/zDYLjSBqBcxO7QbnT5xv6j0UXsKbW0Z1769DK2oCHbg3FrK2wlOpUaHvgbtEWi9z8vqn8SwRqCmNQKgPqAYGaG/T27mArB74tccwA5sp1j9Pc30UY4kpWWlmbjRXtwTmEmATcdgP9P72WW8dUsraZJu5xn4b/X+VluCRoLfIaH5CD8GnrKwn+0GtNSkzYMn5n57b3WiK2RMconTuicq49toVKAQtKT2LmWFM0InA+VS0qhEEGCNCn+WmVmctkso6KQlsvMPXbUoucf8AEBj4JKs4TZlUzeRZJZlD6QZvZd08C4aN+if9hP4Vc0yAOpGy42sb2EKXlLeMr6WFdplU1Kg5l4jqEU4xeYKkfcC40uhz9HKNBGFqMPsiqbmyFXYSDr1RHED5VN9SbNbPuguxloxPiTFCpiapGjXZR8LIEKHOXEk6kyfdTD9F6SMknbsdC5C7K6ERRkKw8P082IoD/wDQH5X/AEQDgrXwx/xNAxPPaNdD8Pmg+jj0xrYv3323+HX/ADaWSqMBkHSOnx/r/mNlM0Xtp/f69d9eVNadQfh/fv8AM/uqBwM3HNz+SHRUaJIjaBf5W9piZRVcmw6uj1XNpIA37jU2MpzqLcxdHNEZsvNHQH3+tguOZGUCYjSwbGwO+9o9iuCNLQL/AB12jWfbfSNLheY+LqubE1f3XQLdPz9916e94AJJsBJMxEHXtHXRp01XkXEqmepUf+J5PzKpAAKE7KkwLoOqpRxG6mkGqQrkIHHGtXKoBBCkbuU2EUNHsF4cHZnAaAS7t3+q6tDhsCwYWrVBzVnkCA24E6ADVJDJilCtN2r0Wywca/Fu1ek3/wAL1oPsEMSQTdEUgdzFlDXF5kCy8nZcYNQSZCTqsG1kxr10s7XN0U9gYZgCDE6ze6j8YVMmHLdC9wEdtVHhzBv1VH4rxhqVQyeVg07nVUwrlMXI6iUrVO4en2UbQnVSvRMZIkEwJwXHDyFaeGTGJo/xx6c2oI039lVhFcLq5KtNx2qA3JA17Ln0cesscCNQZ75p/n/9enZdLB7X/pr9J/7E4CCTudZjWLzG8a9oi66fjr8T0t1jQdL6qAR866Dl1gsOwudht+JtlFVpnMLRykXoyb6gHr1ZvrN1M0mAZMRIMy33HX+I6id1EYzkACzQDDzInQHpP3Y5jaVxxX+IsSKWHqumC4ZW7y4iLHcxvpHcLy2uLra+O8X/AIVEH951vcD9bfdMrG1FfGtAbImixKbCkcQITS8dU9IAyy5K6SE15hKEk2900JNuFyV3QUWeGqu+z1Gzyh7SB3J/okhaNXke3qRHeJXFonk6/wAGrnKlRswwKAgRp9FIypIQVWpe4XzUbZoaRKHgxHVQl0lOo6iPkmAQLq0eiUtMm2/NY3G1c1So7q63stTxDEZKNQ75YHuVjwFr+NHtkcz6Q+muvSppPWsznaRT1BTNz7qXMuOHs6JzXQuCEiFxx61wTE+bQo1JElgBgaEf10Gx5tEaf0OotE3+HXdxuLLJ/wCz7Gg06lExLXZhzRY6/lr3jdawj4HrOWI/KOv3NN1FqmEF4rxHyTTBY55eYBkAtIi5Om9jsimk80nTUZpDOttWzvuZspKYiIHyZlIMW5TodYGkTN4QPFMX5VKtVuMrJbHtALT0n7xvtugcef8AifG+biarrwHZWzsBZVYC68SZJvuuOMD3WtKkIRm8lMhdcVwJRhQoKzrx2lTOKDL5v3+iD7OCaJsU4hR0Br7KSVwUOpJLgcGyToBf2SSySsLZrqrxsVC13VMqkG4t1TGrxaPRJ6bpcBpfVcgbprDNhqkLzdVh0Sn2VvHRFOJsXBULFceIagysbvmn4KnAXofH/UzZXsklMKcTZciYHdXJxVuhhEGVKLhMr2tMwdtEqJQKZY8ZUPa6FK0qMtXaesIki98I4vy8SzYO5fjt/fdenNOkdBEGfaJ+k677Lxqi8tcHDUGQvXMHiPMpseCCHNntcXn30J/7dVKaOQUX6WkRB1e3uOsdtTqLBZXx3jAGtoiZdUzPuLwN41PfSwharOGiXGLTJdkt+nvq3ReaeKsWKuJqEelpyttl01ttebLoLZzKslRPdJTyYB6qIrQwI4QuuC7CY9yUJFiHWshKTb/BFZC5waNSYHun4rCPpO52ls6Wj3S+xqdWMoG6e6VHSUq4AysZp1P4D+SS5V9FT+A/kkpy7OYSPExffKxvYuhdb4g7N/8AYkkoeGH0U8s/sczxEB90f+xS0+Og/wDL2n12KSSKxxA8kiv4nivNeHBsACIkKFlSNkklVOlQjdifXT61J7YzMe2WhwlhGZpAIPsQQQehSSXOTOUqdkVRwiAD37rjHx/okkipBc3J2wkVm9fokajdZC6km5CnTVb1C3/hDjFL7O1j6rGua4hoNUNMbQDYa+x30XUkJO0cg7jGJw1Sg8vrNc1jZaWVJLnaDX+xuvOg6d5O90kl0Gcxr3Sew0XWhdSVLAMcVCSkkg2E7hHubUaWmHC7T0KsvEFXNTpkzmmXGeWY26LiSyzyyWRRXQ/NqNFPSKlDkklpFQ3E1A2nUndsD3ISSSSS7OZ//9k="
                    alt="Avatar"
                   style={{borderRadius:'50%'}}/>
                   </div>
                   
                   <h2 style={{paddingTop:'2em'}}>Ahsan khan</h2>
                   <h4 style={{color:'grey'}}>Programmer|Data scientist</h4>
                   <hr style={{  borderTop:'3px solid #833fb2',width:'70%'}}></hr>
                   <p>Being a Computer Science graduate, I’m highly motivated and seek opportunities to polish and enhance my skills. I am a dedicated person and can handle any task thrown at me. I have been successful in my line of work and I attribute this success to my ability to plan, schedule, and handle many different tasks at once. This flexibility will help me in any department requiring my skills, 
                       where there are many different technicalities and other aspects are to be handled.
                   </p>
                   <hr style={{  borderTop:'3px solid #833fb2',width:'70%'}}></hr>
                   <h5>Address</h5>
                   <p>Landhi 5 1/2 Area 5B </p>
                   <h5>Phone</h5>
                   <p>+923142108238</p>
                   <h5>Email</h5>
                   <p>khanahsan530@gmail.com</p>
                   <h5>Github</h5>
                   <p>https://github.com/ahssankhan530</p>
                   </Cell>
                   <Cell className='resume-right-col' col={8}>
                   <h2>Education</h2>
                  
                   <Education
                   startyear={2012}
                   endyear={2014}
                   schoolname={"Sindh Madersatul islam University"}
                   schooldescription={"Bachelors in Computer science "}
                   />
                    <Education
                   startyear={2012}
                   endyear={2014}
                   schoolname={"Govt Islamia science College "}
                   schooldescription={"FSC pre-engineering "}
                   />
                    <Education
                   endyear={2012}
                   schoolname={"prince Oxford english school"}
                   schooldescription={"Matriculation "}
                   />
                   <hr style={{borderTop:' 3px solid #e22947'}}/>
                   <h2>Experience</h2>
                   <Experience
                   startyear={2018}
                   endyear={2019}
                   companyname={"Panacloud"}
                   decription={"Artifical inteligence bootcamper"}
                   />
                   <Experience
                   startyear={2018}
                   endyear={'....'}
                   companyname={"Freelancing"}/>
                    <Experience
                   startyear={2019}
                   endyear={2019}
                   companyname={"Business Incubation center"}
                   />
                <hr style={{borderTop:' 3px solid #e22947'}}/>
                    <h2>Skills</h2>
                    <Skills
                    skills={"Python"}
                    progress={90}
                    /><Skills
                    skills={"Flask"}
                    progress={95}
                    /><Skills
                    skills={"Machine learning "}
                    progress={65}/>
                    <Skills
                    skills={"Heroku"}
                    progress={70}/>
                    <Skills
                    skills={"Reactjs"}
                    progress={60}/><Skills
                    skills={"MONGODB"}
                    progress={50}/><Skills
                    skills={"POSTGERSQL"}
                    progress={55}/><Skills
                    skills={"C#"}
                    progress={50}/>
                   </Cell>
               </Grid>
            </div>
        )
    }
}
