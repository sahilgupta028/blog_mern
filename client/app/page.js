import Link from "next/link";
import { RiArrowRightDoubleLine } from "@remixicon/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-serif bg-black">
      <div className="flex flex-row justify-between items-center">
        <div className="w-20 h-20 m-7">
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw4NDQ4PDQ0PEA0PDw8QDxAODg8PDw0QFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGjAlHyUrLTIrMC0tLSstKystLS0tKy0vLS0uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLf/AABEIAN8A4gMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAAAQUGBwQCAwj/xABMEAABAwICBAcJDQcDBQEAAAABAAIDBBEFEgYhMUETIlFhcYGRBxQyUlRyobLSFRY0QlNidIKSk7HB0SMkNVWUpLMzZKNjc6LC8EP/xAAbAQABBQEBAAAAAAAAAAAAAAAAAgMEBQYBB//EAEQRAAEDAQMJBAQKCQUAAAAAAAEAAgMRBCExBRJBUWFxobHBgZHR8AYTFDIiQlJTcpKi0uHiFSMzYoKTstPxJDRDRGP/2gAMAwEAAhEDEQA/AIxCELLr0lCEJoQhJCELiEIQhdQhMC+xWDC9Da+pseC4Jh+NOS3sHhehKYxzzRoqm5JWRNzpHADbd55qvgr0QtHoO5zA3XUTySHxWAMb2m5/BWCk0Yw+EDLSRm2+UGU/+d1MZYJTjQedl3FVUuXLK33au3Cg438FjIudgJPIBcr2ynk+Tf8AZd+i3aKnjjFmRsaORrWt/BfdPDJp0v4fioZ9IBoi+1+VYEaWT5N/2XfovD2lu0EdIsv0AvlLAyQWexrh85oP4oOTf3+H4oHpDrj+1+VYCktsq9GqCYcekhB5WM4M9rbKBru53SvBMEssTvnWkZ2Gx9KZfk+UYUPnb4qZFl2zOudVvZUcL+CzFCsuJ6EV1PdzYxOwfGhJc+3Ow6+y6rjmkEgggjUQRYg843KG9jmGjhRWkU0cozo3AjZ5u7V5QhCSnUITQhcQkmkhCE0kIQhCaSF2iEIQhCE0JIQhNJfejpJaiQRwsc55PFa0a+nmHOhcqAKlfABWfR/Qupq8r5f2MJ13cOO8fNZv6TbrVu0Z0LhpA2Soyy1GojVeKI/NB2nnPVZW5WcFg0y93iVnLblyhLLP9Y9B1PdpUNhGjdJRi8UQL/lZAHSHoPxeqymU0lZta1oo0UCzskj5HZzySdt6aEISkhCEIQhCEIQhCEIQhCicXwKlrG2nhBdukHFkb9b8jqUqhcc0OFCKhLY90bs5hIOsXLKsf0Enp7vpSZ4hrygWlaPNHhdXYqlZfoJVnSXRGCuBey0VR44GqQ/PG/p29KrJ7Bpi7vBaGxZcwZaPrDqOo7lkSF14phs1JKYp4y1w62uHKDvC5VWEEGhWjaQ4Ag1BSTQkuJSaSaEIXlCaELiEIQhdQhC+9FSyTysijbd73BrQN55+Qb7oXCQLyvrhWGzVkzYoW5nO231NY3eXHcAte0cwCGgiysGaRwHCSEDM86tQ5G8yNGsCjw+HI2zpHWMr7a3u5ByNG4KZV3ZLKIxnO97ksdlPKZtDjHGfgf1bTs1DvvwaEk1NVQhCSEITQhJCEJoSQhCE0IQhJCaEIQkhCE0ISQhRmOYPDXRGOZuy5Y8DjxO5Wn8t6yHHcGmoJjHKNW1rhfLI3lH5jctyUXjuExV0LoZRyljgONG/c4fpvUS1WUTCo97nsKtMm5SdZXZrr2HhtHUad6w9NdeK4dLRzvhlFnNO0bHtOwt5iuNUZBBoVtGuDgHNNQUJoSXF1CEIQhCEIQhNaloFo/3rCKiVv7xM0ZbjXFEdYHMTtPUFUtBME78qhJI28MFnOvse74re0XPMOda8rOwQV/WHs8VnMuW2g9nYdrug6nsSQmhWqzKEk0IQhc1bUCKKWS1+Dje8gbTlBNvQulcGNfA6r6PN6hSXGjSQlxNDntB0kc1E0+O1kjGvjwp7mPa17Hd9RDM1wuDr5l9fdjEP5RJ/Vwrv0f8AgNH9Gp/8YUJjWkslPVup2mmYBGx+apdMMxdfUMgOyyjElrA5zzfTQ37qsmMEszoo4WmldL8AafL3Ls92MQ/lEn9XCj3YxD+USf1cKivfdL8vhn26r2Ee+6X5fDPt1XsJHrm/OH7PgpXsEvzDe+T7ylfdjEP5RJ/Vwo92MQ/lEn9XCor33S/L4Z9uq9hHvul+Xwz7dV7CPWt+cP2fBHsEvzDe+T7ylfdjEP5RJ/Vwpe7Ff/KJP6qFcuB6SyVNWKd5pnB0T35qd0xylpGo5wOVWl+w9Cdj+GKtee5v3VBtFIHZr4W1pXF/31w4JiAq6aOcMLA8E5Sb5bEjbv2LvUHoR/DKXzX+u5TqdicXRtJ1BRrXG2Od7G4BxA3AlCSaE4o6SaEIQq1pngDa6AlgHfMIJiO943sPTu5+tZARbURYjUQdRBX6EWW90fBOAnFTG20c5Oe2xk2sk/WGvpBVZb7Pd6xvb4+ei0eQ7bf7O87W9R1G3eqahCaqlpkkIQhcQvbGrxZWHQjDu+a+IEXji/bO5LM2DtypTGlzg0aUiWQRsL3YAE9y0jRPCu86OKMi0h/aScz3W1dQsOpTSE1pGNDWhowC89lkdI8vdiTUpJpJpSQkmkmhCS4ca+B1X0eb1Cu9cGNfA6r6PN6hSX+6U7B+1bvHNedH/gNH9Gp/8YUfSsDsXq8wB/dafaAd7lIaP/AaP6NT/wCMLhov4vWfRqf8XJn4rPOgqX8e0bj/AFtU13uzxG/ZCO92eI37IX0TUhV6+Xe7PEb9kI73Z4jfshfRNCFX5mBuL09gB+5zbAB8cKedsUHU/wAYp/ok3rhTj9hTUWLvpdApVq92P6A5uUJoR/DKXzX+u5TigtCP4ZS+a/13KdXLP+ybuHJdt/8Au5fpu5lNJNCeURJNJNCElH47hzaumlhdbjt4hPxXjwT22UgmuEBwoUpj3McHNxBqOxYDM0sc5rxYglrh4rgbEdq8EXVn7ouG8BXGRo4tQ3P9cXD/AMj9ZVhqzkjCx5adC9AglE0TZBpFfEd9V4QvV0JtPIJWjdy2itDPUEa3vbG3zQAT6XDsWdFbJoZS8Dh1MCNbmcIecvJd+BCm2BtZa6gqfLcmZZc0fGIHYL+gU6khNXax6EJJoQhCSEITXBjXwOq+jzeoV3rgxr4HVfR5vUKS/wB0p2D9q3eOa86P/AaP6NT/AOMKKbVxQ4tVGWWOMOpqcAyPawE3dsvtUrgB/cqP6NT/AOML6T4fTyOzywQvdYDNJGxzrDYLlNZrixubiNe5SfWMZNKH1o6oux96vRefdij8rpvv4/1S92KPyum+/j/VHuRReSU33EX6I9yKLySm+4i/RK/W7Ej/AEn732U/dij8rpvv4/1R7sUfldN9/H+qXuRReSU33EX6I9yKLySm+4i/RH63Yj/SfvfZUR31FNi9OYpI5AKSYExyNeAcw1GysrtnauSnw+njdmighY61s0cTGutyXAXU5w5R2hdja4A52JOhN2iRjy0MrQCl+OJPVQuhH8MpfNf67lOqB0I/hlL5r/Xcp1Js/wCybuHJOW//AHUv03cymhCE8oiEJJoQhCSaEKod0ij4ShEgHGgkafqO4p9Jb2LLCVuOPU3DUdTH40MlvOAuPSAsQ2qmyg2kgdrHJa3IUudZyw/FPA386r5oRZCgK7X0W7YfEI4IWDY2KNo6mgfksJh1vYOV7B6Qt/Vpk0XvO7qs56Qm6MfS6JoQhWizSEIQhCEIQhCFWdJDVTzNoqaSOJs1PI+Rz2FxLQ4Mc0HdcO5FZlF4rglLVlrqiHO5gIac0jSAdZ8EhNytLm0HOnFSLLIyOUOeLqHRnUOg0JANDtVVj0Hna0C9G6wtdwqrnps9e/eVNyUX917am/ebhnko+9m9pHvNwzyUfeze0ofsg+Q36x+6rf8ASx+dd/Lb/cUJ7yp/9l/de2ucaOyQSls2HsqYiwFrqWWVmV99hzv5PxCsfvNwzyT/AJZ/aR7zcM8lH3s3tI9l1Nb9b8i6MrD40jj/AAU4iUHiq7NgTpnxsgwvvcEu4SSpmkewC2q2V99v5L7+8qf/AGX917am/ebhnko+9m9pHvNwzyX/AJZvaR7Lra3vpyYj9LNwbI4fw14ulJ4qE95U/wDsv7r20joTMd1F1d9e2pz3m4Z5L/yze0j3m4Z5J/yz+0j2UfIb9b8i5+lv/V38sf3FH6ORVVDURUE0sUsJgklZlaQ5lnDVfeLk9qt6icP0fo6WThIIAyTKW5s8jjlNrjjEjcFLKXCwsbQ863byqq2TMmkz2arzQNqb6mgJHFNCEJ1RUk0IQhCSaEISssFq4ODllZ4kj2/ZcR+S3tYbpGLV1WOSeb13KtykLmnfxWi9Hz8KQbB18VH5kLyhVK06+kBs9h5HtPpC3+6/PnJbbcLe6GUSQxPGx8bHDoLQfzVnk03vG7qs36Qi6I/S6LpQhJWqzSaEIQhCS5q6qjgifLKcsbGlzjzfqqXSVNVjcjwJH02HxmzhGcskvzS7ebazuFxtTMkwYQ0CpOA84BSrPZTK0vJzWNxceQGJOwK3VGL0sRtJUwscNodMwOHVdOkxWmmNoqmJ7vFZI0u7NqztmP4ZCRHBhbZTmyB05a8uN7A6w7apTTjR2CKm76p2CGWIx5mx8WMguA1DcQSNYUcWlxaXNoaY0rzIoVYOybEx7Y5M9pdc0kNxuxaHEjEaVf0KsaB4u+ro7zG8sT+DLjte0gFpPPrt1LhxnSWaep7ywwAyklskx1tjt4WXdYb3G/IAU/7Qz1YfrwGknUoIsMpmdCKfBxOgAaSdXHYrfPOyMXke1g5XuDR6V5pqqOUExyxyAaiY3teAeeyx/TCkMFUI31Ek8rY2Ple9xP7Q3JDb7BbKrnobPHQYP3xO6zXvkkO9zviBoG8nKmY7WXyFhFAK1v1KZaMltjs7ZWvLi4gAUpWvbXdcrquGpxSmiNpamFjuR0jQ7svdU+lqazGDJI6V1Jh0ZN+DdkfIBtBfv1bTsHIVFx4lRCdlNh2GxVDi/IJKoZy873AHYNpvq1DYh1ruBAuOFa1O4C+m25EWS6uLXkki9wbSjdPwnEgV2DOWg0+MUkrg2Oqgc47GiVtz0DepFUTTHRqAUTqiOKKKeENc8QNyRPFwHDLzXuDzI7nOOyTB9LM4ufG3PE5xu4sBs5pO+1xbp5ksTubKI5BjgR5uTT7DG+zm0QOJDTeDiNoIupfsV7XNVVkUIvLLHGOWR7Wdl1XNNNJxRM4KGxqXjfrELPGI3k7h19NQ0YwOXFZ3zVMj3QtPHeXFznu25Wk7OfkuOVcltVH+rjFXcAu2bJudCbRO7NZ3k7hvuHKl60iLHaN5syrgLtw4VmtSSq+PaO0LaGoywRRmOJ72va0B7XNFxd206+XlUb3McRkkjnhkcXMhLCy5vlDswyjm4t+tKEzmyiN4F+FEh1kifZ3Twk0aaEOpp0gjkr2hCFJVchCEIQhYZpI69fWH/rzeu5bksDr5uFmmf48j3dpJ/NVmUjc0bStF6PD4Uh3dfBfBCEKqWnTW0aH1XDYdSu3iPgzzGMln5LFlpXcsrc0E8B2xyB7fNcAD6W+lTbA+ktNY89VTZciz7LnfJIPYbuoV6SQmrtY9JCE0IVN7p7nChjAvlNQwO5CMriL9YC+mDubSYDwjdX7vK/pkfcN9JAVmqaWOZjmSsbIx21rwHNPUVU9PODpMMbBC3IySVrGsGwNF3nbuuB2qHKwsc6b93irayytmjistPj1Ooi+vbRUTReAPxCmDiA0Ste4uIAyt45v9m3WrXpzjrakMoaM8M972l5j4zSQeKxpG3XrJ5uyG0DwSGtnl4dpdEyO4Ac5nHLgG6wb7A5ffTjRmOhEc1MXCN7i1zXOLi19iRYnXYgHbyKvYJG2cluBN+umHkq9mdZ329jXk54FwpdU31JrWuy68Y6FasNw1+G4POB8I4KWV2XXwbyywA80AdhUT3KqZv73L8bMyMcoHhHtsOxdvc7xd9VBNBOTIYstnPJeXRuuMridtiD1FTQw+nw6Gqmp48l43SOaHOyksa4iwJs3bbUp0bGu9XK33Wg9ip55nxiazSXve4XjA3im4Uw7llOk9Vw9fVP2gzOa3zQbD0NCsGnrHw02G04BEbIg5w3OeAA7rFz9pVzAabvitp2HWHzNzc4zXPoBW0YhQQ1LQ2eJkjQbgPF7HlB3KHZ4nTskINCaeJ6K0t9qZY5oARUNr3UzRTdeqHppWikoKWgi4ueFj5bb2gbPrOzE9HOvp3LsLH7WrcP8ApR8x1F59Udqq+l9QH184HgRu4FguTlbEMgGvnB7VqeidIIMPpm7zE2R3nP45/FPQ/rbSTobhy87VHtp9myeGj3nm/t+EegT0ucBh1Xf5Fw6zqH4rOO52/LiTDu4ObN5obf8AEBXLukVgjw/IDxp3tYPNbx3eqB1qqaAUjpDWygeBSSMb57wbehpXZ3VtTANH4nkE3YG5uTZXOwdUd4A5qAxetdVVMszrkve4jmbfUOoWC2PR7DhSUkUIGtrAXnxpHa3HtWLUTmiaO+wSsLujOL+hb4k5OFS55x8cUv0gdmMjibcL+FAO5cGL4bFWRGKbNkJBOR7mG42bNvQV88FwSnoWOZA0jMcznOcXOcdms/kqh3Ua97HU0LHOabOkdlcWk3Ia29uhyl+51E/vDPI5znSyucC9xdZrQGgC+67SetShKx1oLc28DHzvVa+zSssAkMnwXH3b8am/VoqrWmhClqrSTSTQhR+N1PA0lTJ4kMpHTlNvTZYXvPStW7pNZwVBwYPGnkaz6reMfwA61lKpsourIG6hzWtyDFmwOf8AKPAfjVCEIUBXaFYdA8R72xCPMbMnvE761rH7Qb2qvJg8mo7iNoSmPLHBw0JEsbZWGN2BBHncv0GkojRjFBWUcUpIz2ySc0jdvbqPWphaRrg4BwwK89kjdG8sdiDQoQkmlJCFm3dVqby00QPgxvkPOXnKPUK0hZXpnhlZVYhM9lJOYxkY1zY3kOa1o1jrJUO3E+qoBiVb5Ea32nOcQKA4ml5u6lT/AHLaXLSTSnbLLlHmsH6ucvHdSqQKWCK/GfKXW5mtI/FwXDVOxDDKWgNO12RsLuHY6Nzmtkc4vPCNGsbQAeYqCNLiOMVOdzHOvZuZzCyKJvJfYBzayVFfJmxeoDTnXaO08VZRWbPtZtrntzKnTqq0V0aAeVVZO5TSkMqpvivcxjectFz6wUz3QqngsNkA2yPZGOvjH0NKlcEw1lHTxwM15Rdzt73nwndqp/dVqjamhF9r5HDm1Nb/AOyfcDBZaHGnE/5UCJ4tmUw9ourXsaLuSiO5pS8JX5zshie/6xswehxWsrM+5rW00JqBLKxk0hY1gecoc1tzqcdV7u2X3LS0uwACEU8+QkZbc42o1GAAG3Td2krBcUv3xPfbwst+nM663KitwMVtnBx26LBZ1plolUd8SVFLGZYpXF7mt4zmPOt3F3gm51cq+cdZjj6ZtIymla3KI85hex+TZlMjrAatV9qiQONne8Oab8KDV4qztsbbfDG6N7RTGppSoHKnauTT7FxWVYjjJMUALBbWHPvxnDrAH1Ve9DMHNFRta8WmkIklB2gkABvULdd1D6KaE8A5s9YWulFiyJvGYw7nOO8jk2DnV6UmzQvzzLJidGpV2UbZF6ptlgNWtxOvzidFTdrOLaU4FJQ1DuKeAe8uhda7bHY0nc4bLcysOD90Hg4WR1ED3yNAaHtc0ZwNQzA7/wAVOaYaUx0NoRE2aV7czmPF42sN7ZuUm2xR2iuPxzVGSXD4IHFjpGSRQhlw0XO0cl9YKj5rYps2OSldFCadFYGR9psYktEOdS8EOAJpiaYjbjhWmCpukmKyVtU6WSPgyGhjGa7tDb2Bvv1k9a13AaXgKOmj2FsLM3nEXd6SVkVGzv8AxFodrM9Tmf5pfc/mtuS8n1c58h86fBM5cIjjigApTRqpcOqaEk1ZrOIQkuHGa9tJTyzv2RtJA8Zx1Nb1kgLhIAqV1rS5wa0VJwWb90nEeGrWxNN207cp/wC4eM70WHUVUl9J5XSPc9xu5znPceVzjcntK+azcjy95cdK9Cs8IhibGNA/zxqhCEJCeQhCEIVq7n2N961PBSG0M5DbnY2T4juvYekci1lfn0LWdB9IO/IODlP7zCAH3OuRmwP5zuPP0q0sE/8AxHs8Fm8uWL/sMGx3Q9D2bVakJJq0WaQhCSEJoQhCEL5yRNd4TWuHzgCvaaEKoaQ6EQVILqYNgn5AMsT+YgbOkdhVSo8dxHCnmGUOc1v/AOU2ZzQOVrtoHRq5lrajcYwanrY8k7L28F2x7DzH8tihy2Wpz4jmu7gVbWXKZDfVWkZ7Nt5G7Xu7tSrMHdHp8v7Smma75ro3N7SQfQrZhdYainimLCzhWB4aTchp2a+ix61To+5xGJg41LjCDctyWe4cl7267K9RxhrQ1oAa0AADYANgSrP6+p9b2YdEjKHsQDRZhfpxu2X+btq+iEJKUqxZppNC2HHIpakfu0hhfdwu0NADTfmDgCRyKwaYY7Tx0cgZLFLNIx0cYY9ry3OMrnXHgjKTrVgxDD4almSeJsjdoDh4J5QdoPQo6n0Uw+NwcyjjuNmcvkA6nEhQzDI3PDKUdrrUV5q2bbLPIIjMHVjAFBShphu23Gqqnc4wN2c1kzSGBpbDmFs7zteOYC4vznkWkLy0WFhqA1ADcvSfghETM0KHbLW61SmR12oah5v2koQkmnVFQsy7pONcLK2kjPEiOaUjY6S2z6oPaeZWzS7HhQUxLSDUSXbE3bY73kcg/GwWPOcXElxJcSSSdZJOskqtyhPQerHb4edG9aHIdizne0PFw93adJ7MN+5eUITVStQkhCEIXpqbl4QhcQunDa6SmmZNC7K9puDuPKDygjUudJdBpggtBFDeFtuj+MxV8Alj1OFhIwm7o38nRyHepdYXguLzUMwlhPM9p8CQeK79dy17Asbhr4RJEbEWzsJGeN3IebkO9XdltQlGafe57VjMpZNNmdnsvYeGw9D33qWQkmpiqkJIQhCaEIQhJNCEISTQhCEJITQhCSaSEJoQkhCFwYxiUVHC6aY2a3UAPCe7c1o3koxbFIaOEyzuytGpo2ue7c1o3lZDpHj01fNnfxWNuI4wbta38yd5UW1WoQigxVnk7JzrU7OdcwYnXsHm7evjjWKy11Q6aU+FqY0eCxo2Af8A2s3XC5eUKiJJNTitm1gaA1ooBcE0k0lxLQhNJCEJpIQhCEIQhC6sOxCallbLC8te3eNjhvDhvHMuVC6DQ1C44BwocFrmjOl0FcAx9oqnxCeLIeVhO3o29Ks6/PoKt2j+nc9PaOqBniGoOJ/atHnHwuvXzqzgt+iXv8VmrbkPF9n+qeh6HvOC1VCi8KxumrG3gma421s1Nkb0tOvr2KTVm1wcKg3LPPY5js1wodRTQhC6kpJoQhCEIQhCEIQhCEk1H4ni1PSMzTytYNwJ47uhu0rhIAqUprXOOa0VOxSCr2kelFPQNLSc85HFiadY5C8/FHpVSx/T+SW8dE0xM2GV1uEcObc30noVLc4kkkkuJuSSSSeUk7VXT28C6Pv8Ne/Der+xZDcTnWi4fJ0nedG4X7l24xi09bKZJ35tzWDU1jeQDd+a4EIVUSSanFaZrQ0BrRQDBNJCFxKQmkhCEIQhCEIQhCEIQhCEIQhCEIQgIXF7jcWuDmktINw5pILTzEbFZcM05rYLNkLZ2j5Xw+pw19t1WSvKWyRzDVpompYI5hmyNBG3zUdi1PD+6DRyWEzJYXcpGdg626/Qp6kx2jm/06qFx8XhA132TrWHIPSpjMoSD3gDwVVLkGzuvYS3iON/FfoJrgRcG45RrXpfn+OoezwZHt82RzfwXWMbrPLKj7+X2k+MpDSzjVRHejxBuk4fit1SPoWF+7dZ5ZUffy+0uaWqlf4cr3ec5zvxK4cpDQ3jRcHo+dMnD8RzW21WMUkP+rVQt5jK3N1AayoKu09oov8AT4WZ3zG5WdrregFZSOlAKZdlCQ+6AOKlx5Bs7b3ku4Dx4q2Yrp7WTXbDkgYdhaSZLecfyAVXmmfI4vke57jtc5xc49JK8EJKG+R7zVxqraGzxQikbQN3jjxQmkhITyEIQhCEIQhCEIQhCEIQhC//2Q==" className="rounded-full" alt="web-series" />
        </div>
        <div className="flex px-5 py-5 justify-around">
          <Link href="/posts">
            <button className="m-4 bg-blue-500 p-5 rounded-lg flex flex-row text-white hover:bg-blue-600 transition-all duration-300">
              See All Posts <RiArrowRightDoubleLine />
            </button>
          </Link>
        </div>
      </div>
      <div className=" flex flex-col items-center m-28">
        <h1 className="text-6xl m-4 text-white font-extrabold">Welcome to ThoughtStream !!!</h1>
        <h3 className="text-4xl m-4 font-medium text-slate-100">Every story has its own unique melody, and within the pages of this blog, we aim to orchestrate a symphony of voices, ideas, and perspectives.</h3>
        {/* <h4 className="text-4xl m-4 font-medium text-slate-100">Ready to Shop? Explore Now. Your Next Favorite Awaits.</h4> */}
        <div className="flex flex-row align-middle items-center">
        <Link href="/login">
          <button className="m-10 bg-blue-500 p-5 rounded-lg flex flex-row text-white hover:bg-blue-600 transition-all duration-300">
            Login Yourself <RiArrowRightDoubleLine />
          </button>
        </Link>
        <Link href="/register">
            <button className="m-4 bg-blue-500 p-5 rounded-lg flex flex-row text-white hover:bg-blue-600 transition-all duration-300">
              Register <RiArrowRightDoubleLine />
            </button>
          </Link>
          </div>
      </div>
    </main>
  );
}
